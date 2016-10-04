module.exports = function (grunt) {
    require('grunt-task-loader')(grunt);
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            display: {
                files: ["*.html", "*.css"],
                // tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        },
    });


    // 默认被执行的任务列表。
    grunt.registerTask('default', ['watch']);

};