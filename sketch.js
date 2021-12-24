const Agent=function(){
    this.vector=createVector(random(width),random(height)),
    this.vectorOld=this.vector.copy(),
    this.stepSize=random(1,5),
    this.isOutside=!1,
    this.angle=0
};
Agent.prototype.update=function(t){
    this.vector.x+=cos(this.angle+Math.PI*1.5)*this.stepSize,
    this.vector.y+=sin(this.angle+Math.PI*1.5)*this.stepSize,
    this.isOutside=this.vector.x<-20||this.vector.x>width+20||this.vector.y<-200||this.vector.y>height+200,
    this.isOutside&&(this.vector.set(-20,random(height+200)-200),
    this.vectorOld=this.vector.copy()),
    strokeWeight(t*this.stepSize),
    line(this.vectorOld.x,this.vectorOld.y,this.vector.x,this.vector.y),
    this.vectorOld=this.vector.copy(),
    this.isOutside=!1
},
Agent.prototype.update1=function(t,e,i){
    this.angle=noise(this.vector.x/t,this.vector.y/t)*e,
    this.update(i)};
    let agents=[],
      agentCount=0;
    const noiseScale=500,
      noiseStrength=3,
      overlayAlpha=30,
      agentAlpha=255,
      strokeWidth=.3;
    function setup(){
      createCanvas(windowWidth ,windowHeight),
      agentCount=windowHeight*.75;
      for(let t=0;t<agentCount;t++)agents[t]=new Agent
    }
    function draw(){
      fill(175,195,188,overlayAlpha),
      noStroke(),
      rect(0,0,width,height),
      stroke(220,235,220,agentAlpha);
      for(let t=0;t<agentCount;t++)agents[t].update1(noiseScale,noiseStrength,strokeWidth)
    }
    function windowResized(){resizeCanvas(windowWidth,windowHeight)}