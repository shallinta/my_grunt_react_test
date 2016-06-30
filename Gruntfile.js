'use strict';

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({

		//获取 package.json 的信息 
		pkg: grunt.file.readJSON('package.json'),

		//clean
		clean: {
			dist: {
				files: [{
					src: [
						'tmp/*',
						'dist/*'
					]
				}]
			},
		},

		//copy
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.*', '!**/*.js', '!**/*.jsx', '!**/*.less'],
					dest: 'tmp'
				}]
			}
		},

		//uglify配置
		uglify: {
			options: {
				stripBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy.mm.dd") %> */\n'
			},
			build: {
				src: 'tmp/**/*.js', 
				dest: 'dist/main.js'
			}
		},

		//jshint配置
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			build: {
				src: 'tmp/**/*.js'
			}
		},

		//babel配置
		babel: {
			options: {
				sourceMap: false
			},
			build: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: '**/*.js',
					dest: 'tmp'

				}]
			}
		},

		//react
		react: {
			build: {
				files: [{
					expand: true,
					cwd: 'src/jsx/',
					src: ['**/*.jsx'],
					dest: 'src/jsx',
					ext: '.js'
				}]
			}
		},

		browserify: {
			build: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['sum.js', 'jsx/*.js'],
					dest: 'tmp/'
				}]
			}
		}

	});

	

	var taskList = [
		'clean',
		'babel',
		'react',
		'browserify',
		'copy',
		// 'jshint',
		'uglify'
	]

	grunt.registerTask('default', taskList);

	
	
}