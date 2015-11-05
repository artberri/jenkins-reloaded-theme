module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            all: {
                files: {
                    'dist/reloaded.min.js': ['dist/reloaded.js']
                }
            }
        },
        browserify: {
            dist: {
                files: {
                  'dist/reloaded.js': ['src/js/reloaded.js']
                }
            }
        },
        copy: {
            images: {
                expand: true,
                cwd: 'src/images/',
                src: '**',
                dest: 'dist/images/',
            }
        },
        scsslint: {
            allFiles: [
                'src/scss/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: true
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        eslint: {
            target: ['src/js/**/*.js']
        },
        connect: {
            server: {
              options: {
                port: 8000,
                hostname: 'localhost',
              }
            }
        },
        watch: {
          compass: {
            files: ['src/scss/**/*.scss'],
            tasks: ['compass']
          },
          js: {
            files: ['src/js/**/*.js'],
            tasks: ['browserify', 'uglify']
          },
          copy: {
            files: ['src/reloaded.js', 'src/images/*'],
            tasks: ['copy']
          }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-eslint');

    // Tasks
    grunt.registerTask('lint', ['scsslint', 'eslint']);
    grunt.registerTask('test', ['lint']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('build', ['test', 'copy', 'browserify', 'uglify', 'compass']);
    grunt.registerTask('default', ['serve']);
};
