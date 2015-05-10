module.exports = function( grunt ) {

  grunt.initConfig({
    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main.min.js' : [ 'assets/_js/scripts.js' ]
        }
      }
    }, // uglify
    sass : {
      dist : {
        options : { 
          style : 'compressed',
          compass : true,
          debugInfo : true
        },
        files : {
          'assets/css/style.min.css' : 'assets/_scss/gumby.scss'
        }
      }
    }, // sass
    watch : {
      dist : {
        files : [
          'assets/_js/**/*',
          'assets/_scss/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    }, // watch
    imagemin: {                          // Task 
      dynamic: {                         // Another target 
        files: [{
          expand: true,                  // Enable dynamic expansion 
          cwd: 'assets/_img/',                   // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
          dest: 'assets/img/'                  // Destination path prefix 
        }]
      }
    } // Imagemin
  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass' , 'imagemin' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};