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
                    'dist/reload.min.js': ['src/reload.js']
                }
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
          app: {
            files: ['src/**/*.scss'],
            tasks: ['compass']
          }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tasks
    grunt.registerTask('lint', ['scsslint']);
    grunt.registerTask('test', ['lint']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('build', ['uglify', 'compass']);
    grunt.registerTask('default', ['serve']);
};
