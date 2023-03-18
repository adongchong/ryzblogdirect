/*universe星空特效 start*/
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark()
/*universe星空特效 end*/

/*snow雪花特效start*/
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    // 移动端不显示
} else {
    // document.write('<canvas id="snow" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;pointer-events:none"></canvas>');

    window && (() => {
        let e = {
            flakeCount: 50, // 雪花数目
            minDist: 150,   // 最小距离
            color: "255, 255, 255", // 雪花颜色
            size: 2,  // 雪花大小
            speed: .1,  // 雪花速度
            opacity: .3,    // 雪花透明度
            stepsize: .5    // 步距
        };
        const t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }
            ;
        window.requestAnimationFrame = t;
        const i = document.getElementById("snow"),
            n = i.getContext("2d"),
            o = e.flakeCount;
        let a = -100,
            d = -100,
            s = [];
        i.width = window.innerWidth,
            i.height = window.innerHeight;
        const h = () => {
            n.clearRect(0, 0, i.width, i.height);
            const r = e.minDist;
            for (let t = 0; t < o; t++) {
                let o = s[t];
                const h = a,
                    w = d,
                    m = o.x,
                    c = o.y,
                    p = Math.sqrt((h - m) * (h - m) + (w - c) * (w - c));
                if (p < r) {
                    const e = (h - m) / p,
                        t = (w - c) / p,
                        i = r / (p * p) / 2;
                    o.velX -= i * e,
                        o.velY -= i * t
                } else
                    o.velX *= .98,
                        o.velY < o.speed && o.speed - o.velY > .01 && (o.velY += .01 * (o.speed - o.velY)),
                        o.velX += Math.cos(o.step += .05) * o.stepSize;
                n.fillStyle = "rgba(" + e.color + ", " + o.opacity + ")",
                    o.y += o.velY,
                    o.x += o.velX,
                    (o.y >= i.height || o.y <= 0) && l(o),
                    (o.x >= i.width || o.x <= 0) && l(o),
                    n.beginPath(),
                    n.arc(o.x, o.y, o.size, 0, 2 * Math.PI),
                    n.fill()
            }
            t(h)
        }
            , l = e => {
                e.x = Math.floor(Math.random() * i.width),
                    e.y = 0,
                    e.size = 3 * Math.random() + 2,
                    e.speed = 1 * Math.random() + .5,
                    e.velY = e.speed,
                    e.velX = 0,
                    e.opacity = .5 * Math.random() + .3
            }
            ;
        document.addEventListener("mousemove", (e => {
            a = e.clientX,
                d = e.clientY
        }
        )),
            window.addEventListener("resize", (() => {
                i.width = window.innerWidth,
                    i.height = window.innerHeight
            }
            )),
            (() => {
                for (let t = 0; t < o; t++) {
                    const t = Math.floor(Math.random() * i.width)
                        , n = Math.floor(Math.random() * i.height)
                        , o = 3 * Math.random() + e.size
                        , a = 1 * Math.random() + e.speed
                        , d = .5 * Math.random() + e.opacity;
                    s.push({
                        speed: a,
                        velX: 0,
                        velY: a,
                        x: t,
                        y: n,
                        size: o,
                        stepSize: Math.random() / 30 * e.stepsize,
                        step: 0,
                        angle: 180,
                        opacity: d
                    })
                }
                h()
            }
            )()
    }
    )();
}
/*snow雪花特效end*/

/*leavesfall落叶特效start*/
// var stop, staticx;
// var img = new Image();
// // 将引入的图片文件替换为你想要的即可
// img.src = "/img/Ginkgoleaves.webp";

// function Sakura(x, y, s, r, fn) {
//     this.x = x;
//     this.y = y;
//     this.s = s;
//     this.r = r;
//     this.fn = fn
// }
// Sakura.prototype.draw = function (cxt) {
//     cxt.save();
//     var xc = 20 * this.s / 2;
//     cxt.translate(this.x, this.y);
//     cxt.rotate(this.r);
//     cxt.drawImage(img, 0, 0, 20 * this.s, 20 * this.s);
//     cxt.restore()
// };
// Sakura.prototype.update = function () {
//     this.x = this.fn.x(this.x, this.y);
//     this.y = this.fn.y(this.y, this.y);
//     this.r = this.fn.r(this.r);
//     if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
//         this.r = getRandom("fnr");
//         if (Math.random() > 0.4) {
//             this.x = getRandom("x");
//             this.y = 0;
//             this.s = getRandom("s");
//             this.r = getRandom("r")
//         } else {
//             this.x = window.innerWidth;
//             this.y = getRandom("y");
//             this.s = getRandom("s");
//             this.r = getRandom("r")
//         }
//     }
// };
// SakuraList = function () {
//     this.list = []
// };
// SakuraList.prototype.push = function (sakura) {
//     this.list.push(sakura)
// };
// SakuraList.prototype.update = function () {
//     for (var i = 0, len = this.list.length; i < len; i++) {
//         this.list[i].update()
//     }
// };
// SakuraList.prototype.draw = function (cxt) {
//     for (var i = 0, len = this.list.length; i < len; i++) {
//         this.list[i].draw(cxt)
//     }
// };
// SakuraList.prototype.get = function (i) {
//     return this.list[i]
// };
// SakuraList.prototype.size = function () {
//     return this.list.length
// };

// function getRandom(option) {
//     var ret, random;
//     switch (option) {
//         case "x":
//             ret = Math.random() * window.innerWidth;
//             break;
//         case "y":
//             ret = Math.random() * window.innerHeight;
//             break;
//         case "s":
//             ret = Math.random();
//             break;
//         case "r":
//             ret = Math.random() * 4;
//             break;
//         case "fnx":
//             random = -0.5 + Math.random() * 1;
//             ret = function (x, y) {
//                 return x + 0.5 * random - 1.7
//             };
//             break;
//         case "fny":
//             random = 1.5 + Math.random() * 0.7;
//             ret = function (x, y) {
//                 return y + random
//             };
//             break;
//         case "fnr":
//             random = Math.random() * 0.03;
//             ret = function (r) {
//                 return r + random
//             };
//             break
//     }
//     return ret
// }

// function startSakura() {
//     requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
//     var canvas = document.createElement("canvas"),
//         cxt;
//     staticx = true;
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     canvas.setAttribute("style", "position: fixed;left: 0;top: 0;pointer-events: none;");
//     canvas.setAttribute("id", "canvas_sakura");
//     document.getElementsByTagName("body")[0].appendChild(canvas);
//     cxt = canvas.getContext("2d");
//     var sakuraList = new SakuraList();
//     for (var i = 0; i < 50; i++) {
//         var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
//         randomX = getRandom("x");
//         randomY = getRandom("y");
//         randomR = getRandom("r");
//         randomS = getRandom("s");
//         randomFnx = getRandom("fnx");
//         randomFny = getRandom("fny");
//         randomFnR = getRandom("fnr");
//         sakura = new Sakura(randomX, randomY, randomS, randomR, {
//             x: randomFnx,
//             y: randomFny,
//             r: randomFnR
//         });
//         sakura.draw(cxt);
//         sakuraList.push(sakura)
//     }
//     stop = requestAnimationFrame(function () {
//         cxt.clearRect(0, 0, canvas.width, canvas.height);
//         sakuraList.update();
//         sakuraList.draw(cxt);
//         stop = requestAnimationFrame(arguments.callee)
//     })
// }
// window.onresize = function () {
//     var canvasSnow = document.getElementById("canvas_snow")
// };
// img.onload = function () {
//     startSakura()
// };

// function stopp() {
//     if (staticx) {
//         var child = document.getElementById("canvas_sakura");
//         child.parentNode.removeChild(child);
//         window.cancelAnimationFrame(stop);
//         staticx = false
//     } else {
//         startSakura()
//     }
// };
// /*leavesfall落叶特效end*/

//--------------------------
/*sakura樱花特效start*/
