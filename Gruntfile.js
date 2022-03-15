const sass = require('node-sass');

module.exports = grunt => {
    require('load-grunt-tasks')(grunt);
     
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/main.css': 'assets/css/main.scss'
                }
            }
        },
        watch: {
        scripts: {
          files: [
            'assets/css/*.scss'
          ],
          tasks: ['sass']
        }
      }
    });
     
    grunt.registerTask('default', ['sass']);
};
 
