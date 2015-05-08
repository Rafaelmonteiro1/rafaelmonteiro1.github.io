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
        options : { style : 'compressed' },
        files : {
          'assets/css/style.min.css' : 'assets/_scss/style.scss'
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
    } // watch
  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};