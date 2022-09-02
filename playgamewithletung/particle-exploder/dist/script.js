var w=window.innerWidth,
    h=window.innerHeight,
    amount=((w*h)/10000)|0;
outOf.textContent=amount+1;
c.width=w;
c.height=h;
var ctx=c.getContext('2d');

var inGame=false,
    cells=[];
function getRandomColor(min){
  return 'rgb(cr, cg, cb)'.replace(
    'cr', (Math.random()*(255-min))|0+min).replace(
    'cg', (Math.random()*(255-min))|0+min).replace(
    'cb', (Math.random()*(255-min))|0+min)
};
clicked=false;
function init(){
  clicked=false;
  ctx.fillStyle='black';
  ctx.fillRect(0, 0, w, h);
  score.textContent='0';
  cells=[];
  for(var n=0; n<amount; ++n){
    cells.push(new Cell);
  }
  inGame=true;
  anim();
}
var maxSize=10, minSize=6,
    maxV=4;
function Cell(size, x, y){
  this.color=getRandomColor(100);
  this.size=size||Math.random()*(maxSize-minSize)+minSize;
  this.initSize=this.size;
  this.x=x||Math.random()*w;
  this.y=y||Math.random()*h;
  this.vx=Math.random()*maxV*2-maxV;
  this.vy=Math.random()*maxV*2-maxV;
  this.exploded=false;
  this.explosionSize=10;
}
Cell.prototype.update=function(){
  this.x+=this.vx;
  this.y+=this.vy;
  
  if(this.x<0||this.x>w) this.vx*=-1;
  if(this.y<0||this.y>h) this.vy*=-1;
  
  
  ctx.fillStyle=this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, Math.abs(this.size/2), 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
  //ctx.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size);
  
  if(this.exploded){
    if(this.size>0){
      this.explosionSize+=1/this.explosionSize*10;
      this.size-=0.05;
    }else{
      cells.splice(cells.indexOf(this), 1);
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.explosionSize, 0, Math.PI*2);
    
    for(var i=0; i<cells.length; ++i){
      var cell=cells[i];
      if(!cell.exploded){
        var a=this, b=cell;
        var distX=a.x-b.x,
            distY=a.y-b.y,
            dist=Math.sqrt((distX*distX)+(distY*distY));
        if(dist<=this.explosionSize) cells[i].explode();
      }
    }
    
    ctx.strokeStyle=this.color;
    ctx.stroke();
    ctx.closePath();
  }
}
Cell.prototype.explode=function(){
  this.exploded=true;
  this.vx=this.vy=0;
  score.textContent=parseInt(score.textContent)+1;
}
nextInit=false;
function anim(){
  if(nextInit){
    nextInit=false;
    init();
    return;
  }
  if(inGame) window.requestAnimationFrame(anim);
  ctx.fillStyle='rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, w, h);
  var c;
  for(c=0; c<cells.length; ++c) cells[c].update();
  
  if(cells.length===0) gameOver();
}
function gameOver(){
  inGame=false;
}
init();
document.addEventListener('click', function(e){
  if(!inGame) init();
  else if(clicked) nextInit=true;
  else{
    var cell=new Cell(15, e.clientX, e.clientY)
    cells.push(cell);
    cell.explode();
    clicked=true;
  }
})