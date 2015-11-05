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
                    'dist/reloaded.min.js': ['src/reloaded.js']
                }
            }
        },
        copy: {
            js: {
                src: 'src/reloaded.js',
                dest: 'dist/reloaded.js',
            },
            images: {
                src: 'src/images/*',
                dest: 'dist/images/',
            }
        },
        scsslint: {
            allFiles: [
                'src/**/*.scss'
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
            files: ['src/**/*.scss'],
            tasks: ['compass']
          },
          js: {
            files: ['src/reloaded.js'],
            tasks: ['uglify']
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

    // Tasks
    grunt.registerTask('lint', ['scsslint']);
    grunt.registerTask('test', ['lint']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('build', ['copy', 'uglify', 'compass']);
    grunt.registerTask('default', ['serve']);
};
