/**
 * @author: djb
 * @Date: 2016-03-07 13:15:46
 * @description: gulpfile.js
 * @   1.less 编译 压缩 合并
 * @   2.js 压缩 合并 混淆
 * @   3.img 复制
 * @   4.HTML 复制
 */
"use strict";
/**
 * 载入gulp包、less包、cssnano包、gulp-concat包、gulp-uglify包、gulp-htmlmin包、browser-sync包
 * less： 编译
 * cssnano： css压缩
 * gulp-concat： js合并
 * gulp-uglify： js压缩混淆
 * gulp-htmlmin：html压缩
 * browser-sync：启动server并同步
 **/
const gulp = require("gulp");
const less = require("gulp-less");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync");

// less编译->css压缩->css复制
gulp.task('style', () => {
    gulp.src(["src/style/*.less"])
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// js 合并-> js压缩混淆
gulp.task("script", () => {
    gulp.src(["src/js/*.js"])
        // .pipe(concat("index.js"))
        // .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// 图片复制
gulp.task("image", () => {
    gulp.src(["src/img/*.*"])
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// html压缩 复制
gulp.task("html", () => {
    gulp.src(["src/*.html"])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// html压缩 复制
gulp.task("html2", () => {
    gulp.src(["src/templates/*.html"])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest("dist/templates"))
        .pipe(browserSync.reload({
            stream: true
        }));
});


// 监听
gulp.task("serve", () => {
    browserSync({
        server: {
            baseDir: ['dist']
        }
    }, (err, bs) => {
        console.log(bs.options.getIn(["urls", "local"]));
    });
    gulp.watch("src/style/*.less", ["style"]);
    gulp.watch("src/js/*.js", ["script"]);
    gulp.watch("src/img/*.*", ["image"]);
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("src/templates/*.html", ["html2"]);

});
