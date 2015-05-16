module.exports = function( grunt ) {

  grunt.initConfig({
    uglify : {
      options : {
        mangle : {
          except: ['jQuery']
        },
        beautify: false
      },
      my_target : {
        files : {
          'js/rafaelmonteiro.min.js' : [ 'assets/scripts/jquery/jquery.js', 'assets/scripts/bootstrap/bootstrap.js' , 'assets/scripts/main.js' ]
        }
      }
    }, // uglify
    sass : {
      dist : {
        options : { 
          style : 'compressed',
          debugInfo : true
        },
        files : {
          'css/rafaelmonteiro.min.css' : 'assets/stylesheets/bootstrap.scss'
        }
      }
    }, // sass
    watch : {
      dist : {
        files : [
          'assets/scripts/**/*',
          'assets/stylesheets/**/*'
        ],
        tasks : [ 'uglify', 'sass' , 'imagemin']
      }
    }, // watch
    imagemin: {                          // Task 
      dynamic: {                         // Another target 
        files: [{
          expand: true,                  // Enable dynamic expansion 
          cwd: 'assets/images/',                   // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
          dest: 'img/'                  // Destination path prefix 
        }]
      }
    }, // Imagemin
    browserSync: {
        bsFiles: {
            src : [
              'assets/scripts/**/*',
              'assets/stylesheets/**/*',
              'css/*.css',
              'js/*.js',
              '*.html'
            ]
        },
        options: {
          watchTask: true,
          proxy: "rafaelmonteiro.localhost"
        }
    }
  });

  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks( 'grunt-browser-sync' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas que serão executadas
  grunt.registerTask( 'd', [ 'browserSync', 'watch' ] );
  grunt.registerTask( 'u', [ 'uglify' ] );
  grunt.registerTask( 's', [ 'sass' ] );
  grunt.registerTask( 'i', [ 'imagemin' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', ['watch'] );

};