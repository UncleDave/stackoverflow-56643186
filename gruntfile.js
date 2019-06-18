module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        report: 'min',
        mangle: false
      },
      working: {
        files: {
          'dist/app.min.js': ['shopping-cart.js', 'app.js']
        }
      },
      broken: {
        files: {
          'dist/app.min.js': ['app.js', 'shopping-cart.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('working', ['uglify:working']);
  grunt.registerTask('broken', ['uglify:broken']);
};
