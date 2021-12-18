
var gameState = "start";

var welcomePage, welcomePageImg;
var playButton, playButtonImg;
var controlButton, controlButtonImg, controlInformation, controlInformationImg;
var closeButton, closeButtonImg;
var storyButton, storyButtonImg, story, storyImg;
//----------------------------------------------------------------------------------------
var gameSound;
//----------------------------------------------------------------------------------------
var scoreImg;
var oneScore = 0;
var twoScore = 0;
var threeScore = 0
//----------------------------------------------------------------------------------------
var edges;
//----------------------------------------------------------------------------------------

//these are common for everything levels
var FinishFlagImg;
var FinishFlagTouchingSound;
var levellockImg;
var heartImg;
var jumpObImg;
//----------------------------------------------------------------------------------------
var forest, forestImg;
var InsLevelOneGround;
var InsLevelOneTrack1, InsLevelOneTrack2, InsLevelOneTrack3;
var levelOneTrackImg;
var levelOneGem1, levelOneGem2, levelOneGem3, levelOneGem4,
    levelOneGem5, levelOneGem6, levelOneGem7, levelOneGem8,
    levelOneGem9, levelOneGem10, levelOneGem11;
var levelOneGem1Img, levelOneGem2Img, levelOneGem3Img, levelOneGem4Img, levelOneGem5Img;
var FinishFlagInswall;
//----------------------------------------------------------------------------------------
var snow, snowImg;
var levelTwoGround;
var levelTwoTrack1, levelTwoTrack2, levelTwoTrack3, levelTwoTrack4, levelTwoTrack5, levelTwoTrack6,
    levelTwoTrack7, levelTwoTrack8, levelTwoTrack9, levelTwoTrack10, levelTwoTrack11, levelTwoTrack12,
    levelTwoTrack13;
var levelTwoTrackImg;
var levelTwoTrack1Img;
var leveltwotSprite1, leveltwotSprite2, leveltwotSprite3;
var levelTwolockKey,prisonOpenSound;
var levelTwoRounderOB, levelTwoRounderOBImg;
//this below img is common for three sprites;
var levelTwoOBImg;
var levelTwoOB1;
var levelTwoOB2;
var levelTwoOB3;

var levelTwoSnakeOB,levelTwoSnakeOBImg;
var snakeScore = 0;
var levelTwoFinishFlag;
var gameOver,gameOverImg;
var resetButton,resetButtonImg;

var levelTwoInvisibleSprite1;

var levelTwoSnowOBJ1;

var levelTwoGem1, levelTwoGem2, levelTwoGem3, levelTwoGem4, levelTwoGem5, levelTwoGem6,
    levelTwoGem7, levelTwoGem8, levelTwoGem9, levelTwoGem10, levelTwoGem11, levelTwoGem12,
    levelTwoGem13,levelTwoGem14, levelTwoGem15, levelTwoGem16, levelTwoGem17;
var levelTwoGem1Img, levelTwoGem2Img, levelTwoGem3Img, levelTwoGem4Img, levelTwoGem5Img;

var levelTwoLife = 3;
var lev2Heart1,lev2Heart2,lev2Heart3,lev2Heart4,lev2Heart5;
//---------------------------------------------------------------------------------------------------------

var volcano,volcanoImg;
var lavaFall, lavaFallImg;
var groundLava, groundLavaImg;
var levelThreeTrackImg;
var levelThreetSprite1, levelThreetSprite2, levelThreetSprite3;
var levelThreeTrack1, levelThreeTrack2, levelThreeTrack3, levelThreeTrack4, levelThreeTrack5, levelThreeTrack6,
    levelThreeTrack7, levelThreeTrack8, levelThreeTrack9, levelThreeTrack10;
var levelThreeBlackhole1, levelThreeBlackhole2, levelThreeBlackholeImg;
var blackHoleSound;
var ObslantingImg, ObslantingImg2;
var levelThreeGem1, levelThreeGem2, levelThreeGem3, levelThreeGem4, levelThreeGem5, levelThreeGem6,
    levelThreeGem7, levelThreeGem8, levelThreeGem9, levelThreeGem10, levelThreeGem11, levelThreeGem12;
var levelThreeGem1Img, levelThreeGem2Img, levelThreeGem3Img, levelThreeGem4Img, levelThreeGem5Img;
var l3Invisible1, l3Invisible2, l3Invisible3;
var level3JumpOb1, level3JumpOb2, level3JumpOb3, level3JumpOb4;
var level3JumpOb1Score = 0, level3JumpOb2Score = 0, level3JumpOb3Score = 0, level3JumpOb4Score = 0;
var levelThreeLife = 3;
var lev3Heart1, lev3Heart2, lev3Heart3;
var burningSound;

//---------------------------------------------------------------------------------------------------------
var player;
var player1;
var player2;
var playerStand;
var playerSideWays;
//-----------------------------------------------------------------------------------------------------------
var treasure,treasure1,treasure2;
var treasureImg;
var treausreCollectingSound;

function preload(){
    //welcomepage;
           welcomePageImg = loadImage("images/backgrounds/welcomePage.jpg");

    //level-1 images;
           forestImg = loadImage("images/backgrounds/forestImg.jpg");
           levelOneTrackImg = loadImage("images/track/rockPath.png");

    //scoreimg;
           scoreImg = loadImage("images/gems/point.png");
    //FLAG;
           FinishFlagImg = loadImage("images/flags/finishflag.png");
    //lockImg;
           levellockImg = loadImage("images/track/lock.png"); 
    //lockkeyimg;      
           levellockKeyImg = loadImage("images/key.png");      
    //level-2 images;
           snowImg = loadImage("images/backgrounds/snowImg.jpg");
           levelTwoTrackImg = loadImage("images/track/snowpath1.png");
           levelTwoTrack1Img = loadImage("images/track/snowtrack2.png");
           levelTwoRounderOBImg = loadImage("images/obstacles/obstacle1.png");
           levelTwoOBImg = loadImage("images/obstacles/obstacle3.png");
           levelTwoSnakeOBImg = loadImage("images/obstacles/snake.png");
           
           heartImg = loadImage("images/heart.png");
           gameOverImg = loadImage("images/gameover.png");
           resetButtonImg = loadImage("images/buttons/reset.png");

    //level-3 images;
           volcanoImg = loadImage("images/backgrounds/volcanoImg.jpg");
           lavaFallImg = loadImage("images/lavaball.png");
           groundLavaImg = loadImage("images/obstacles/groundlava.png");
           levelThreeTrackImg = loadImage("images/track/volcanoPath.png");
           levelThreeBlackholeImg = loadImage("images/black.png");
           ObslantingImg = loadImage("images/obstacles/obstacleslanting.png");
           ObslantingImg2 = loadImage("images/obstacles/obstacleslan1.png");
           jumpObImg = loadImage("images/obstacles/obstacle.png");

    // endPage images;
           endImg = loadImage("images/backgrounds/endpage.png");       

    //character
           playerStand = loadImage("images/c/standing.png");
           playerSideWays = loadImage("images/c/sum.png");

    //buttons;
          playButtonImg = loadImage("images/buttons/playButton.png");
          controlButtonImg = loadImage("images/buttons/controlButton.png");
          controlInformationImg = loadImage("images/backgrounds/control.png");
          closeButtonImg = loadImage("images/buttons/close button.png");
          storyButtonImg = loadImage("images/buttons/storybutton.png");
          storyImg = loadImage("images/backgrounds/story.png");


    //loading gems images;
          levelOneGem1Img = loadImage("images/gems/line1gem1.png");
          levelOneGem2Img = loadImage("images/gems/line1gem2.png");
          levelOneGem3Img = loadImage("images/gems/line1gem3.png");
          levelOneGem4Img = loadImage("images/gems/line1gem4.png");
          levelOneGem5Img = loadImage("images/gems/line1gem5.png");

          levelTwoGem1Img = loadImage("images/gems/line2gem1.png");
          levelTwoGem2Img = loadImage("images/gems/line2gem2.png");
          levelTwoGem3Img = loadImage("images/gems/line2gem3.png");
          levelTwoGem4Img = loadImage("images/gems/line2gem4.png");
          levelTwoGem5Img = loadImage("images/gems/line2gem5.png");

          levelThreeGem1Img = loadImage("images/gems/line3gem1.png");
          levelThreeGem2Img = loadImage("images/gems/line3gem2.png");
          levelThreeGem3Img = loadImage("images/gems/line3gem3.png");
          levelThreeGem4Img = loadImage("images/gems/line3gem4.png");
          levelThreeGem5Img = loadImage("images/gems/line3gem5.png");

    //treasure;
          treasureImg = loadImage("images/t/treasureImg.png");

    //soundloading-------------------------------------------------------------
   
      gameSound = loadSound("images/sounds/startS.mp3");
      loseSound = loadSound("images/sounds/lose.mp3");
      crystalCollectSound = loadSound("images/sounds/collect.mp3");
      treausreCollectingSound = loadSound("images/sounds/treasureCollectingSound.mp3");
      prisonOpenSound = loadSound("images/sounds/prisonopen.wav");
      FinishFlagTouchingSound = loadSound("images/sounds/finishsound.wav");
      blackHoleSound = loadSound("images/sounds/blackholesound.wav");
      burningSound = loadSound("images/sounds/burningSound.mp3");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();

  gameSound.loop();
  
  start();
  controlPageSprite();
  storyPageSprite();
  levelOneSprite();
  levelTwoSprite();
  levelThreeSprite();
  EndSprite();

}

function draw() {
  background(0);
  drawSprites();  

  if(gameState === "start"){
       stroke(255);
       strokeWeight(2);
       fill(255, 10, 84);
       textSize(100);
       textFont("monotype corsiva");
       text("FrazerAndTreasure",windowWidth-1100,windowHeight-620);
       startlevel();
  }

  if(gameState === "level-1"){
       levelOne();   
  }

  if(gameState === "level-2"){
       levelTwo();
  }
  
  if(gameState === "level-3"){
      levelThree();
  }

  if(gameState === "control"){
       controlPage();
  }

  if(gameState === "story"){
       storyPage();
  }
  
  if(gameState === "end"){
     End();
  }

}

function start(){
  welcomePage = createSprite(width/2,height/2+100,windowWidth,windowHeight);
  welcomePage.addImage("welcomepage",welcomePageImg);
  welcomePage.scale = 1;
  welcomePage.visible = false;

  playButton = createSprite(windowWidth-770,windowHeight-320);
  playButton.addImage("startbutton",playButtonImg);
  playButton.scale = 1;
  playButton.visible = false;

  controlButton = createSprite(windowWidth-770,windowHeight-240);
  controlButton.addImage("controlsArea",controlButtonImg);
  controlButton.scale = 1;
  controlButton.visible = false;

  storyButton = createSprite(windowWidth-770,windowHeight-160);
  storyButton.addImage("storyInformation",storyButtonImg);
  storyButton.scale = 1;
  storyButton.visible = false;

  //introSound.play();

}

function controlPageSprite(){

  controlInformation = createSprite(width/2,height/2,windowWidth,windowHeight);
  controlInformation.addImage(controlInformationImg);
  controlInformation.visible = false;

  closeButton = createSprite(windowWidth-100,windowHeight-650,50,50);
  closeButton.addImage("option",closeButtonImg);
  closeButton.scale = 0.3;
  closeButton.visible = false;

}
function storyPageSprite(){

  story = createSprite(width/2-350,height/2-130);
  story.addImage(storyImg);
  story.visible = false;

}
function levelOneSprite(){
  forest = createSprite(width/2,height/2,windowWidth,windowHeight);
  forest.addImage("level-1",forestImg);
  forest.scale = 3.5;
  forest.visible = false;

  player = createSprite(windowWidth-1300,windowHeight-600,50,50);
  player.addAnimation("running",playerStand);  
  player.scale = 0.5;
  player.visible = false;

  InsLevelOneGround = createSprite(windowWidth-775 ,windowHeight-10,1550,30);
  InsLevelOneGround.shapeColor = "red";
  InsLevelOneGround.visible = false;

  InsLevelOneTrack1 = createSprite(windowWidth-1207,windowHeight-475,300,30);
  InsLevelOneTrack2 = createSprite(windowWidth-600,windowHeight-300,300,30);
  InsLevelOneTrack3 = createSprite(windowWidth-300,windowHeight-300,300,30);

  InsLevelOneTrack1.visible = false;
  InsLevelOneTrack2.visible = false;
  InsLevelOneTrack3.visible = false;

  levelOneGem1 = createSprite(windowWidth-1100,windowHeight-510,20,20);
  levelOneGem1.addImage(levelOneGem1Img);
  levelOneGem1.scale = 0.5;
  levelOneGem1.visible = false;

  levelOneGem2 = createSprite(windowWidth-1112,windowHeight-60,20,20);
  levelOneGem2.addImage(levelOneGem2Img);
  levelOneGem2.scale = 0.5;
  levelOneGem2.visible = false;

  levelOneGem3 = createSprite(windowWidth-1080,windowHeight-60,20,20);
  levelOneGem3.addImage(levelOneGem3Img);
  levelOneGem3.scale = 0.5;
  levelOneGem3.visible = false;

  levelOneGem4 = createSprite(windowWidth-1050,windowHeight-60,20,20);
  levelOneGem4.addImage(levelOneGem4Img);
  levelOneGem4.scale = 0.5;
  levelOneGem4.visible = false;

  levelOneGem5 = createSprite(windowWidth-800,windowHeight-60,20,20);
  levelOneGem5.addImage(levelOneGem5Img);
  levelOneGem5.scale = 0.5;
  levelOneGem5.visible = false;

  levelOneGem6 = createSprite(windowWidth-770,windowHeight-60,20,20);
  levelOneGem6.addImage(levelOneGem1Img);
  levelOneGem6.scale = 0.5;
  levelOneGem6.visible = false;

  levelOneGem7 = createSprite(windowWidth-740,windowHeight-60,20,20);
  levelOneGem7.addImage(levelOneGem2Img);
  levelOneGem7.scale = 0.5;
  levelOneGem7.visible = false;

  levelOneGem8 = createSprite(windowWidth-600,windowHeight-60,20,20);
  levelOneGem8.addImage(levelOneGem3Img);
  levelOneGem8.scale = 0.5;
  levelOneGem8.visible = false;

  levelOneGem9 = createSprite(windowWidth-470,windowHeight-60,20,20);
  levelOneGem9.addImage(levelOneGem4Img);
  levelOneGem9.scale = 0.5;
  levelOneGem9.visible = false;

  levelOneGem10 = createSprite(windowWidth-440,windowHeight-60,20,20);
  levelOneGem10.addImage(levelOneGem5Img);
  levelOneGem10.scale = 0.5;
  levelOneGem10.visible = false;

  levelOneGem11 = createSprite(windowWidth-410,windowHeight-60,20,20);
  levelOneGem11.addImage(levelOneGem3Img);
  levelOneGem11.scale = 0.5;
  levelOneGem11.visible = false;

  treasure = createSprite(windowWidth-450,windowHeight-336,50,50);
  treasure.addImage(treasureImg);
  treasure.scale = 0.15;
  treasure.visible = false;

  FinishFlagInswall = createSprite(windowWidth-80,windowHeight-75,50,100);
  FinishFlagInswall.visible = false;
  
}
function levelTwoSprite(){

  snow = createSprite(width/2,height/2,windowWidth,windowHeight);
  snow.addImage("level-2",snowImg);
  snow.scale = 2.5;
  snow.visible = false;

  player1 = createSprite(windowWidth-100,windowHeight-600,50,50);
  player1.addAnimation("running",playerStand);
  player1.scale = 0.5;
  player1.visible = false;

  leveltwotSprite1 = createSprite(windowWidth-810,windowHeight-550,20,110);
  leveltwotSprite1.shapeColor = rgb(255, 202, 24);
  leveltwotSprite1.visible = false;

  leveltwotSprite2 = createSprite(windowWidth-590,windowHeight-550,20,110);
  leveltwotSprite2.shapeColor = rgb(255, 202, 24);
  leveltwotSprite2.visible = false;

  leveltwotSprite3 = createSprite(windowWidth-700,windowHeight-500,300,30);
  leveltwotSprite3.addImage(levellockImg);
  leveltwotSprite3.scale = 0.4;
  leveltwotSprite3.visible = false;

  levelTwoTrack1 = createSprite(windowWidth-100,windowHeight-460,300,30);
  levelTwoTrack1.addImage(levelTwoTrackImg);
  levelTwoTrack1.scale = 0.6;
  levelTwoTrack1.visible = false;

  levelTwoTrack2 = createSprite(windowWidth-1400,windowHeight-600,300,30);
  levelTwoTrack2.addImage(levelTwoTrackImg);
  levelTwoTrack2.scale = 0.6;
  levelTwoTrack2.mirrorX(-1);
  levelTwoTrack2.visible = false;

  levelTwoTrack3 = createSprite(windowWidth-300,windowHeight-380,300,30);
  levelTwoTrack3.addImage(levelTwoTrackImg);
  levelTwoTrack3.scale = 0.6;
  levelTwoTrack3.visible = false;

  levelTwoTrack4 = createSprite(windowWidth-480,windowHeight-250,300,30);
  levelTwoTrack4.addImage(levelTwoTrackImg);
  levelTwoTrack4.scale = 0.6;
  levelTwoTrack4.visible = false;

  levelTwoTrack5 = createSprite(windowWidth-700,windowHeight-300,300,30);
  levelTwoTrack5.addImage(levelTwoTrackImg);
  levelTwoTrack5.scale = 0.6;
  levelTwoTrack5.visible = false;

  levelTwoTrack6 = createSprite(windowWidth-398,windowHeight-335,20,150);
  levelTwoTrack6.shapeColor = (255);
  levelTwoTrack6.visible = false;

  levelTwoGround = createSprite(windowWidth-775,windowHeight-10,1550,30);
  levelTwoGround.visible = false;

  levelTwoTrack7 = createSprite(windowWidth-1100,windowHeight-100,30,350);
  levelTwoTrack7.shapeColor = "white";
  levelTwoTrack7.visible = false;

  levelTwoTrack8 = createSprite(windowWidth-100,windowHeight-300,300,30);
  levelTwoTrack8.addImage(levelTwoTrack1Img);
  levelTwoTrack8.scale = 0.5;
  levelTwoTrack8.visible = false;

  levelTwoTrack9 = createSprite(windowWidth-250,windowHeight-170,300,30);
  levelTwoTrack9.addImage(levelTwoTrack1Img);
  levelTwoTrack9.scale = 0.5;
  levelTwoTrack9.visible = false;
 
  levelTwoTrack10 = createSprite(windowWidth-1250,windowHeight-200,300,30);
  levelTwoTrack10.addImage(levelTwoTrack1Img);
  levelTwoTrack10.scale = 0.5;
  levelTwoTrack10.visible = false;

  levelTwoTrack11 = createSprite(windowWidth-950,windowHeight-400);
  levelTwoTrack11.addImage(levelTwoTrackImg);
  levelTwoTrack11.scale = 0.6;
  levelTwoTrack11.visible = false;

  levelTwoTrack12 = createSprite(windowWidth-1480,windowHeight-200,300,30);
  levelTwoTrack12.addImage(levelTwoTrack1Img);
  levelTwoTrack12.scale = 0.5;
  levelTwoTrack12.visible = false;

  levelTwoTrack13 = createSprite(windowWidth-1100,windowHeight-550,300,30);
  levelTwoTrack13.addImage(levelTwoTrackImg);
  levelTwoTrack13.scale = 0.5;
  levelTwoTrack13.visible = false;

  levelTwolockKey = createSprite(windowWidth-100,windowHeight-350,300,30);
  levelTwolockKey.addImage(levellockKeyImg);
  levelTwolockKey.scale = 0.2;
  levelTwolockKey.visible = false;

  levelTwoRounderOB = createSprite(windowWidth-700,windowHeight-650,50,50);
  levelTwoRounderOB.addImage(levelTwoRounderOBImg);
  levelTwoRounderOB.scale = 0.43;
  levelTwoRounderOB.visible = false;

  levelTwoSnakeOB = createSprite(windowWidth-900,windowHeight-20);
  levelTwoSnakeOB.addImage(levelTwoSnakeOBImg);
  levelTwoSnakeOB.scale = 0.5;
  levelTwoSnakeOB.mirrorX(-1);
  //levelTwoSnakeOB.debug = true;
  levelTwoSnakeOB.visible = false;

  levelTwoOB1 = createSprite(windowWidth-105,windowHeight-170,300,30);
  levelTwoOB1.addImage(levelTwoOBImg);
  levelTwoOB1.scale = 0.7;
  levelTwoOB1.visible = false;

  levelTwoOB2 = createSprite(windowWidth-1220,windowHeight-50,300,30);
  levelTwoOB2.addImage(levelTwoOBImg);
  levelTwoOB2.scale = 0.7;
  levelTwoOB2.visible = false;

  levelTwoOB3 = createSprite(windowWidth-1430,windowHeight-50,300,30);
  levelTwoOB3.addImage(levelTwoOBImg);
  levelTwoOB3.scale = 0.7;
  levelTwoOB3.visible = false;

  levelTwoFinishFlag = createSprite(windowWidth-1450,windowHeight-660,50,100);
  levelTwoFinishFlag.addImage(FinishFlagImg);
  levelTwoFinishFlag.scale = 0.28;
  levelTwoFinishFlag.mirrorX(-1);
  levelTwoFinishFlag.visible = false;

  levelTwoInvisibleSprite1 = createSprite(windowWidth-10,windowHeight-70,20,80);
  levelTwoInvisibleSprite1.shapeColor = "white";
  levelTwoInvisibleSprite1.visible = false;

  treasure1 = createSprite(windowWidth-700,windowHeight-545,50,50);
  treasure1.addImage(treasureImg);
  treasure1.scale = 0.15;
  treasure1.visible = false;

  levelTwoGem1 = createSprite(windowWidth-270,windowHeight-430,20,20);
  levelTwoGem1.addImage(levelTwoGem1Img);
  levelTwoGem1.scale = 0.5;
  levelTwoGem1.visible = false;
  
  levelTwoGem2 = createSprite(windowWidth-300,windowHeight-430,20,20);
  levelTwoGem2.addImage(levelTwoGem2Img);
  levelTwoGem2.scale = 0.5;
  levelTwoGem2.visible = false;

  levelTwoGem3 = createSprite(windowWidth-330,windowHeight-430,20,20);
  levelTwoGem3.addImage(levelTwoGem3Img);
  levelTwoGem3.scale = 0.5;
  levelTwoGem3.visible = false;

  levelTwoGem4 = createSprite(windowWidth-445,windowHeight-300,20,20);
  levelTwoGem4.addImage(levelTwoGem4Img);
  levelTwoGem4.scale = 0.5;
  levelTwoGem4.visible = false;

  levelTwoGem5 = createSprite(windowWidth-475,windowHeight-300,20,20);
  levelTwoGem5.addImage(levelTwoGem5Img);
  levelTwoGem5.scale = 0.5;
  levelTwoGem5.visible = false;

  levelTwoGem6 = createSprite(windowWidth-505,windowHeight-300,20,20);
  levelTwoGem6.addImage(levelTwoGem1Img);
  levelTwoGem6.scale = 0.5;
  levelTwoGem6.visible = false;

  levelTwoGem7 = createSprite(windowWidth-650,windowHeight-350,20,20);
  levelTwoGem7.addImage(levelTwoGem2Img);
  levelTwoGem7.scale = 0.5;
  levelTwoGem7.visible = false;

  levelTwoGem8 = createSprite(windowWidth-680,windowHeight-350,20,20);
  levelTwoGem8.addImage(levelTwoGem3Img);
  levelTwoGem8.scale = 0.5;
  levelTwoGem8.visible = false;

  levelTwoGem9 = createSprite(windowWidth-720,windowHeight-350,20,20);
  levelTwoGem9.addImage(levelTwoGem4Img);
  levelTwoGem9.scale = 0.5;
  levelTwoGem9.visible = false;

  levelTwoGem10 = createSprite(windowWidth-1225,windowHeight-250,20,20);
  levelTwoGem10.addImage(levelTwoGem1Img);
  levelTwoGem10.scale = 0.5;
  levelTwoGem10.visible = false;

  levelTwoGem11 = createSprite(windowWidth-1255,windowHeight-250,20,20);
  levelTwoGem11.addImage(levelTwoGem1Img);
  levelTwoGem11.scale =  0.5;
  levelTwoGem11.visible = false;

  levelTwoGem12 = createSprite(windowWidth-230,windowHeight-210,20,20);
  levelTwoGem12.addImage(levelTwoGem2Img);
  levelTwoGem12.scale = 0.5;
  levelTwoGem12.visible = false;

  levelTwoGem13 = createSprite(windowWidth-260,windowHeight-210,20,20);
  levelTwoGem13.addImage(levelTwoGem3Img);
  levelTwoGem13.scale = 0.5;
  levelTwoGem13.visible = false;

  levelTwoGem14 = createSprite(windowWidth-650,windowHeight-545,20,20);
  levelTwoGem14.addImage(levelTwoGem4Img);
  levelTwoGem14.scale = 0.5;
  levelTwoGem14.visible = false;

  levelTwoGem15 = createSprite(windowWidth-750,windowHeight-545,20,20);
  levelTwoGem15.addImage(levelTwoGem5Img);
  levelTwoGem15.scale = 0.5;
  levelTwoGem15.visible = false;

  levelTwoGem16 = createSprite(windowWidth-1350,windowHeight-100,20,20);
  levelTwoGem16.addImage(levelTwoGem1Img);
  levelTwoGem16.scale = 0.5;
  levelTwoGem16.visible = false;

  levelTwoGem17 = createSprite(windowWidth-1400,windowHeight-100,20,20);
  levelTwoGem17.addImage(levelTwoGem2Img);
  levelTwoGem17.scale = 0.5;
  levelTwoGem17.visible = false;


  lev2Heart1 = createSprite(windowWidth-1100,windowHeight-700,20,20);
  lev2Heart1.addImage(heartImg);
  lev2Heart1.scale = 0.15;
  lev2Heart1.visible = false;

  lev2Heart2 = createSprite(windowWidth-1050,windowHeight-700,20,20);
  lev2Heart2.addImage(heartImg);
  lev2Heart2.scale = 0.15;
  lev2Heart2.visible = false;

  lev2Heart3 = createSprite(windowWidth-1000,windowHeight-700,20,20);
  lev2Heart3.addImage(heartImg);
  lev2Heart3.scale = 0.15;
  lev2Heart3.visible = false;

  gameOver = createSprite(windowWidth-750,windowHeight-400);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1;
  gameOver.visible = false;

  resetButton = createSprite(windowWidth-660,windowHeight-150);
  resetButton.addImage(resetButtonImg);
  resetButton.scale = 0.5;
  resetButton.visible = false;

  levelTwoSnowOBJ1 = createSprite(windowWidth-1380,windowHeight-450,350,20);
  levelTwoSnowOBJ1.shapeColor = (255);
  levelTwoSnowOBJ1.visible = false;
}

function levelThreeSprite(){

  volcano = createSprite(width/2,height/2,windowWidth,windowHeight);
  volcano.addImage("level-3",volcanoImg);
  volcano.scale = 2.78;
  volcano.visible = false;

  player2 = createSprite(windowWidth/2-700,windowHeight/2-120,50,50);
  player2.addAnimation("running",playerStand);
  player2.scale = 0.5;
  player2.visible = false;

  levelThreetSprite1 = createSprite(windowWidth/2-145, windowHeight/2-280);
  levelThreetSprite1.addImage(ObslantingImg2);
  levelThreetSprite1.scale = 0.5;
  levelThreetSprite1.mirrorX(-1);
  levelThreetSprite1.visible = false;

  levelThreetSprite2 = createSprite(windowWidth/2+145, windowHeight/2-280);
  levelThreetSprite2.addImage(ObslantingImg2);
  levelThreetSprite2.scale = 0.5;
  levelThreetSprite2.visible = false;

  levelThreetSprite3 = createSprite(windowWidth/2,windowHeight/2-182);
  levelThreetSprite3.addImage(levellockImg);
  levelThreetSprite3.scale = 0.4;
  levelThreetSprite3.visible = false;

  levelThreeTrack1 = createSprite(windowWidth-1460,windowHeight-560);
  levelThreeTrack1.addImage(levelThreeTrackImg);
  levelThreeTrack1.scale = 0.5;
  levelThreeTrack1.visible = false;

  levelThreeTrack2 = createSprite(windowWidth-1460,windowHeight-400);
  levelThreeTrack2.addImage(levelThreeTrackImg);
  levelThreeTrack2.scale = 0.5;
  levelThreeTrack2.visible = false;

  levelThreeTrack3 = createSprite(windowWidth-1460,windowHeight-240);
  levelThreeTrack3.addImage(levelThreeTrackImg);
  levelThreeTrack3.scale = 0.5;
  levelThreeTrack3.visible = false;

  levelThreeTrack4 = createSprite(windowWidth-95,windowHeight-560);
  levelThreeTrack4.addImage(levelThreeTrackImg);
  levelThreeTrack4.scale = 0.5;
  levelThreeTrack4.mirrorX(-1);
  levelThreeTrack4.visible = false;

  levelThreeTrack5 = createSprite(windowWidth-95,windowHeight-400);
  levelThreeTrack5.addImage(levelThreeTrackImg);
  levelThreeTrack5.scale = 0.5;
  levelThreeTrack5.mirrorX(-1);
  levelThreeTrack5.visible = false;

  levelThreeTrack6 = createSprite(windowWidth-95,windowHeight-240);
  levelThreeTrack6.addImage(levelThreeTrackImg);
  levelThreeTrack6.scale = 0.5;
  levelThreeTrack6.mirrorX(-1);
  levelThreeTrack6.visible = false;

  levelThreeTrack7 = createSprite(windowWidth-1200,windowHeight-65);
  levelThreeTrack7.addImage(levelThreeTrackImg);
  levelThreeTrack7.scale = 0.5;
  levelThreeTrack7.visible = false;

  levelThreeTrack8 = createSprite(windowWidth-900,windowHeight-65);
  levelThreeTrack8.addImage(levelThreeTrackImg);
  levelThreeTrack8.scale = 0.5;
  levelThreeTrack8.visible = false;

  levelThreeTrack9 = createSprite(windowWidth-600,windowHeight-65);
  levelThreeTrack9.addImage(levelThreeTrackImg);
  levelThreeTrack9.scale = 0.5;
  levelThreeTrack9.visible = false;

  levelThreeTrack10 = createSprite(windowWidth-300,windowHeight-65);
  levelThreeTrack10.addImage(levelThreeTrackImg);
  levelThreeTrack10.scale = 0.5;
  levelThreeTrack10.visible = false;

  levelThreeFinishFlag = createSprite( windowWidth - 60,windowHeight -610);
  levelThreeFinishFlag.addImage(FinishFlagImg);
  levelThreeFinishFlag.scale = 0.3;
  levelThreeFinishFlag.visible = false;

  treasure2 = createSprite(windowWidth-830,windowHeight-585);
  treasure2.addImage(treasureImg);
  treasure2.scale = 0.15;
  treasure2.visible = false;

  levelThreeGem1 = createSprite(windowWidth-1490,windowHeight - 590);
  levelThreeGem1.addImage(levelThreeGem1Img);
  levelThreeGem1.scale = 0.5;
  levelThreeGem1.visible = false;
  
  levelThreeGem2 = createSprite(windowWidth-1450,windowHeight-590);
  levelThreeGem2.addImage(levelThreeGem2Img);
  levelThreeGem2.scale = 0.5;
  levelThreeGem2.visible = false;
  
  levelThreeGem3 = createSprite(windowWidth - 1490,windowHeight-270);
  levelThreeGem3.addImage(levelThreeGem3Img);
  levelThreeGem3.scale = 0.5;
  levelThreeGem3.visible = false;
  
  levelThreeGem4 = createSprite(windowWidth-1450,windowHeight-270);
  levelThreeGem4.addImage(levelThreeGem4Img);
  levelThreeGem4.scale = 0.5;
  levelThreeGem4.visible = false;
  
  levelThreeGem5 = createSprite(windowWidth-120,windowHeight-590);
  levelThreeGem5.addImage(levelThreeGem5Img);
  levelThreeGem5.scale = 0.5;
  levelThreeGem5.visible = false;
  
  levelThreeGem6 = createSprite(windowWidth-80,windowHeight-590);
  levelThreeGem6.addImage(levelThreeGem1Img);
  levelThreeGem6.scale = 0.5;
  levelThreeGem6.visible = false;
  
  levelThreeGem7 = createSprite(windowWidth-120,windowHeight-270);
  levelThreeGem7.addImage(levelThreeGem2Img);
  levelThreeGem7.scale = 0.5;
  levelThreeGem7.visible = false;
  
  levelThreeGem8 = createSprite(windowWidth-80,windowHeight-270);
  levelThreeGem8.addImage(levelThreeGem3Img);
  levelThreeGem8.scale = 0.5;
  levelThreeGem8.visible = false;
  
  levelThreeGem9 = createSprite(windowWidth-1200,windowHeight-100);
  levelThreeGem9.addImage(levelThreeGem4Img);
  levelThreeGem9.scale = 0.5;
  levelThreeGem9.visible = false;
  
  levelThreeGem10 = createSprite(windowWidth-900,windowHeight-100);
  levelThreeGem10.addImage(levelThreeGem5Img);
  levelThreeGem10.scale = 0.5;
  levelThreeGem10.visible = false;
  
  levelThreeGem11 = createSprite(windowWidth-600,windowHeight-100);
  levelThreeGem11.addImage(levelThreeGem1Img);
  levelThreeGem11.scale = 0.5;
  levelThreeGem11.visible = false;
  
  levelThreeGem12 = createSprite(windowWidth-300,windowHeight-100);
  levelThreeGem12.addImage(levelThreeGem2Img);
  levelThreeGem12.scale = 0.5;
  levelThreeGem12.visible = false;

  levelThreeGem13 = createSprite(windowWidth-780,windowHeight-600);
  levelThreeGem13.addImage(levelThreeGem3Img);
  levelThreeGem13.scale = 0.5;
  levelThreeGem13.visible = false;

  levelThreeGem14 = createSprite(windowWidth-880,windowHeight-600);
  levelThreeGem14.addImage(levelThreeGem4Img);
  levelThreeGem14.scale = 0.5;
  levelThreeGem14.visible = false;

  groundLava = createSprite(windowWidth/2,windowHeight/2+390);
  groundLava.addImage(groundLavaImg);
  groundLava.scale = 1.5;
  groundLava.visible = false;

  l3Invisible1 = createSprite(windowWidth-1350,windowHeight-600,70,5);
  l3Invisible1.visible = false;

  l3Invisible2 = createSprite(windowWidth-1050,windowHeight-600,70,5);
  l3Invisible2.visible = false;

  l3Invisible3 = createSprite(windowWidth-420,windowHeight-600,70,5);
  l3Invisible3.visible = false;

  lev3Heart1 = createSprite(windowWidth/2-700,windowHeight/2-340);
  lev3Heart1.addImage(heartImg);
  lev3Heart1.scale = 0.15;
  lev3Heart1.visible = false;

  lev3Heart2 = createSprite(windowWidth/2-650,windowHeight/2-340);
  lev3Heart2.addImage(heartImg);
  lev3Heart2.scale = 0.15;
  lev3Heart2.visible = false;

  lev3Heart3 = createSprite(windowWidth/2-600,windowHeight/2-340);
  lev3Heart3.addImage(heartImg);
  lev3Heart3.scale = 0.15;
  lev3Heart3.visible = false;

  level3JumpOb1 = createSprite(windowWidth-1350,windowHeight-100,25,25);
  level3JumpOb1.addImage(jumpObImg);
  level3JumpOb1.scale = 0.4;
  level3JumpOb1.visible = false;

  level3JumpOb2 = createSprite(windowWidth-1050,windowHeight-550,25,25);
  level3JumpOb2.addImage(jumpObImg);
  level3JumpOb2.scale = 0.4;
  level3JumpOb2.visible = false;

  level3JumpOb3 = createSprite(windowWidth-750,windowHeight-100,25,25);
  level3JumpOb3.addImage(jumpObImg);
  level3JumpOb3.scale = 0.4;
  level3JumpOb3.visible = false;

  level3JumpOb4 = createSprite(windowWidth-420,windowHeight-550);
  level3JumpOb4.addImage(jumpObImg);
  level3JumpOb4.scale = 0.4;
  level3JumpOb4.visible = false;
  
  levelThreeBlackHole1 = createSprite(windowWidth-100,windowHeight-510);
  levelThreeBlackHole1.addImage(levelThreeBlackholeImg);
  levelThreeBlackHole1.scale = 0.23;
  levelThreeBlackHole1.visible = false;

  levelThreeBlackHole2 = createSprite(windowWidth-700,windowHeight-660);
  levelThreeBlackHole2.addImage(levelThreeBlackholeImg);
  levelThreeBlackHole2.scale = 0.23;
  levelThreeBlackHole2.visible = false;

  gameOver = createSprite(windowWidth-750,windowHeight-400);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1;
  gameOver.visible = false;

  resetButton = createSprite(windowWidth-660,windowHeight-150);
  resetButton.addImage(resetButtonImg);
  resetButton.scale = 0.5;
  resetButton.visible = false;

}
function startlevel(){
 
  welcomePage.visible = true;
  playButton.visible = true;
  controlButton.visible = true;
  storyButton.visible = true;

  if(mousePressedOver(playButton)){
    gameState = "level-1";

  }
  if(mousePressedOver(controlButton)){
       gameState = "control";
  }
  if(mousePressedOver(storyButton)){
       gameState = "story";
  }
  
}

function controlPage(){
  welcomePage.visible = false;
  playButton.visible = false;
  controlButton.visible = false;
  storyButton.visible = false;
  
  closeButton.visible = true;
  controlInformation.visible = true;
  
  if(mousePressedOver(closeButton)){
     gameState = "start";
     controlInformation.visible = false;
     closeButton.visible = false;
  }
}

function storyPage(){
  welcomePage.visible = false;
  playButton.visible = false;
  controlButton.visible = false;
  storyButton.visible = false;


  closeButton.visible = true;
  story.visible = true;

  if(mousePressedOver(closeButton)){
     gameState = "start";
     closeButton.visible = false;
     story.visible = false;
  }
  
  textSize(45)
  fill(255,0,0);
  text(" FRAZER is an archeologist.",windowWidth-600,windowHeight-400);
  fill(255, 127, 0);
  text(" His, job is to discover the ",windowWidth-600,windowHeight-350);
  fill(255, 255, 0);
  text(" olden things.",windowWidth-600,windowHeight-300);
  fill( 0, 255, 0);
  text(" When he came to know that there are",windowWidth-1050,windowHeight-160);
  fill( 0, 0, 255);
  text(" treasures in his working place.",windowWidth-1050,windowHeight-110);
  fill( 75, 0, 130);
  text(" So, he  decided",windowWidth-1050,windowHeight-60);
  fill(148, 0, 211);
  text(" to find the treasures.",windowWidth-700,windowHeight-60);
}

function playerScore(){

   if(player.isTouching(levelOneGem1)){
      oneScore = oneScore + 1
      levelOneGem1.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem2)){
      oneScore = oneScore + 1
      levelOneGem2.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem3)){
      oneScore = oneScore + 1
      levelOneGem3.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem4)){
      oneScore = oneScore + 1
      levelOneGem4.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem5)){
      oneScore = oneScore + 5;
      levelOneGem5.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem6)){
      oneScore = oneScore + 1
      levelOneGem6.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem7)){
      oneScore = oneScore + 1
      levelOneGem7.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem8)){
      oneScore = oneScore + 1
      levelOneGem8.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem9)){
      oneScore = oneScore + 1
      levelOneGem9.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem10)){
      oneScore = oneScore + 5;
      levelOneGem10.destroy();
      crystalCollectSound.play();
   }
   if(player.isTouching(levelOneGem11)){
      oneScore = oneScore + 1;
      levelOneGem11.destroy();
      crystalCollectSound.play();
   }
   
   if(oneScore === 19){
     if(player.isTouching(FinishFlagInswall)){
       gameState = "level-2";
       FinishFlagTouchingSound.play();
    }
   }
   if(oneScore !== 19){
     if(player.isTouching(FinishFlagInswall)){
       textSize(50);
       textFont("cooper");
       fill("red");
       text("Note! Catch all crystals",windowWidth-1000,windowHeight-500);
     }
   }

}
function levelOne(){

  player.collide(edges);

  image(scoreImg,windowWidth-1000,windowHeight-700,60,40);

  textSize(35)
  fill(255);
  text(" " + oneScore,windowWidth-940,windowHeight-670);

  welcomePage.destroy();
  playButton.destroy();
  controlButton.destroy();
  storyButton.destroy();


  forest.visible = true;

  InsLevelOneGround.visible = true;
  
  player.collide(InsLevelOneGround);
  
  player.collide(InsLevelOneTrack1);
  player.collide(InsLevelOneTrack2);
  player.collide(InsLevelOneTrack3);

  levelOneGem1.visible = true;
  levelOneGem2.visible = true;
  levelOneGem3.visible = true;
  levelOneGem4.visible = true;
  levelOneGem5.visible = true;
  levelOneGem6.visible = true;
  levelOneGem7.visible = true;
  levelOneGem8.visible = true;
  levelOneGem9.visible = true;
  levelOneGem10.visible = true;
  levelOneGem11.visible = true;

  treasure.visible = true;

  player.visible = true;
    

  //InsLevelOneGround.debug = true; 
  //treasure.debug = true;
  //player.debug = true;
  
  //track one ;
  image(levelOneTrackImg,windowWidth-1380,windowHeight-540,levelOneTrackImg.width,levelOneTrackImg.height);
  //track two;
  image(levelOneTrackImg,windowWidth-750,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);
  //track three;
  image(levelOneTrackImg,windowWidth-470,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);

  //ground;
   image(levelOneTrackImg,windowWidth-1550,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
   image(levelOneTrackImg,windowWidth-1230,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
   image(levelOneTrackImg,windowWidth-910,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
   image(levelOneTrackImg,windowWidth-585,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
   image(levelOneTrackImg,windowWidth-300,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);

  //finishflag;
  image(FinishFlagImg,windowWidth-140,windowHeight-128,60,100);

  playerScore();


  if(keyDown("right") || keyDown("D")){
    player.x = player.x + 10;
    player.addAnimation("running",playerSideWays);
    player.mirrorX(-1);
    player.setCollider("rectangle",0,0,302,390);
    player.scale = 0.18;
 }
 

  if(keyDown("left") || keyDown("A")){
     player.x = player.x - 10;
     player.addAnimation("running",playerSideWays);
     player.mirrorX(+1);
     player.scale = 0.18;
     
 }
  //console.log(player.y);
  if(keyDown("UP_ARROW") || keyDown("W")){
    if(player.y >=90 && player.y <=250 || (player.y >=365 && player.y <=500) || (player.y >=500 && player.y < 800)){
      player.velocityY = -13;
    }
    
  }
    player.velocityY = player.velocityY + 0.8;
    
  if(player.isTouching(treasure)){
      treasure.destroy();
      treausreCollectingSound.play();   
  }
}

function player1Life(){
  if(player1.isTouching(levelTwoRounderOB)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
    loseSound.play();
 }
 if(player1.isTouching(levelTwoOB1)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
    loseSound.play();
 }
 if(player1.isTouching(levelTwoOB2)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
    loseSound.play();
 }
 if(player1.isTouching(levelTwoOB3)){
   levelTwoLife = levelTwoLife - 1;
   player1.x = windowWidth-100;
   player1.y = windowHeight-600;
   loseSound.play();
 }
 if(player1.isTouching(levelTwoSnakeOB)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
    loseSound.play();
 }
 if(levelTwoLife === 2){
    lev2Heart3.destroy();
 }
 if(levelTwoLife === 1){
    lev2Heart2.destroy();
 }
 if(levelTwoLife === 0){
    lev2Heart1.destroy();
    gameOver.visible = true;
    resetButton.visible = true;
    player1.destroy();
    levelTwoSnakeOB.velocityX = 0;
    levelTwoRounderOB.rotation = levelTwoRounderOB.rotation = 0;

    if(mousePressedOver(resetButton)){
        gameState = "level-2";
        levelTwoLife = 3;
        twoScore = 0;
        snakeScore = 0;
        gameOver.destroy();
        resetButton.destroy();
        levelTwoSprite();
    }
 }

}
function player1Score(){
   if(player1.isTouching(levelTwoGem1)){
      twoScore = twoScore + 1;
      levelTwoGem1.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem2)){
      twoScore = twoScore + 1;
      levelTwoGem2.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem3)){
      twoScore = twoScore + 1;
      levelTwoGem3.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem4)){
      twoScore = twoScore + 1;
      levelTwoGem4.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem5)){
      twoScore = twoScore + 1;
      levelTwoGem5.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem6)){
      twoScore = twoScore + 1;
      levelTwoGem6.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem7)){
      twoScore = twoScore + 1;
      levelTwoGem7.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem8)){
      twoScore = twoScore + 1;
      levelTwoGem8.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem9)){
      twoScore = twoScore + 1;
      levelTwoGem9.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem10)){
      twoScore = twoScore + 1;
      levelTwoGem10.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem11)){
      twoScore = twoScore + 1;
      levelTwoGem11.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem12)){
      twoScore = twoScore + 1;
      levelTwoGem12.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem13)){
      twoScore = twoScore + 1;
      levelTwoGem13.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem14)){
      twoScore = twoScore + 1;
      levelTwoGem14.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem15)){
      twoScore = twoScore + 1;
      levelTwoGem15.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem16)){
      twoScore = twoScore + 1;
      levelTwoGem16.destroy();
      crystalCollectSound.play();
   }
   if(player1.isTouching(levelTwoGem17)){
      twoScore = twoScore + 1;
      levelTwoGem17.destroy();
      crystalCollectSound.play();
   }

   if(twoScore === 17){
      if(player1.isTouching(levelTwoFinishFlag)){
         gameState = "level-3";
         FinishFlagTouchingSound.play();
     }
   }
   if(twoScore !== 17){
     if(player1.isTouching(levelTwoFinishFlag)){
      textSize(100);
      textFont("cooper");
      fill("red");
      text("Note! Catch all crystals",windowWidth-1000,windowHeight-300);
     }
   }

}
function levelTwo(){
  
  player.destroy();
  treasure.destroy();
  forest.destroy();
  FinishFlagInswall.destroy();
  InsLevelOneGround.destroy();
  InsLevelOneTrack1.destroy();
  InsLevelOneTrack2.destroy();
  InsLevelOneTrack3.destroy();

  image(scoreImg,windowWidth-500,windowHeight-700,60,40);

  textSize(35)
  fill(255);
  text(" " + twoScore,windowWidth-440,windowHeight-665);

  player1.visible = true;
  player1.collide(edges);
  snow.visible = true;

  leveltwotSprite1.visible = true;
  leveltwotSprite2.visible = true;
  leveltwotSprite3.visible = true;

  levelTwoGround.visible = true;
  //display images for ground;
  image(levelTwoTrackImg,windowWidth-1550,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-1330,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-1110,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-890,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-670,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-450,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-230,windowHeight-40,250,50);

  levelTwoTrack1.visible = true;
  levelTwoTrack2.visible = true;
  levelTwoTrack3.visible = true;
  levelTwoTrack4.visible = true;
  levelTwoTrack5.visible = true;
  levelTwoTrack6.visible = true;
  levelTwoTrack7.visible = true;
  levelTwoTrack8.visible = true;
  levelTwoTrack9.visible = true;
  levelTwoTrack10.visible = true;
  levelTwoTrack11.visible = true;
  levelTwoTrack12.visible = true;
  levelTwoTrack13.visible = true;

  levelTwolockKey.visible = true;
  

  levelTwoRounderOB.visible = true;
  levelTwoRounderOB.setCollider("circle",0,0,110)
  levelTwoRounderOB.rotation = levelTwoRounderOB.rotation + 3;

  if(snakeScore === 0){
     levelTwoSnakeOB.velocityX = 6;
  }
  if(levelTwoSnakeOB.isTouching(edges[1]) && (levelTwoSnakeOB.x <= windowWidth)){
      levelTwoSnakeOB.velocityX = -6;
      snakeScore = 1;
      levelTwoSnakeOB.mirrorX(1);
  }else if(levelTwoSnakeOB.isTouching(levelTwoTrack7)){
      levelTwoSnakeOB.velocityX = 6;
      levelTwoSnakeOB.mirrorX(-1);
  }


  levelTwoSnakeOB.visible = true;
  levelTwoSnakeOB.collide(levelTwoGround);

  levelTwoOB1.visible = true;
  levelTwoOB2.visible = true;
  levelTwoOB3.visible = true;

  levelTwoFinishFlag.visible = true;
  levelTwoFinishFlag.setCollider("rectangle",-70,0,80,280)

  levelTwoInvisibleSprite1.visible = true;

  treasure1.visible = true;
  
  levelTwoGem1.visible = true;
  levelTwoGem2.visible = true;
  levelTwoGem3.visible = true;
  levelTwoGem4.visible = true;
  levelTwoGem5.visible = true;
  levelTwoGem6.visible = true;
  levelTwoGem7.visible = true;
  levelTwoGem8.visible = true;
  levelTwoGem9.visible = true;
  levelTwoGem10.visible = true;
  levelTwoGem11.visible = true;
  levelTwoGem12.visible = true;
  levelTwoGem13.visible = true;
  levelTwoGem14.visible = true;
  levelTwoGem15.visible = true;
  levelTwoGem16.visible = true;
  levelTwoGem17.visible =  true;

  lev2Heart1.visible = true;
  lev2Heart2.visible = true;
  lev2Heart3.visible = true;

  levelTwoSnowOBJ1.visible = true;

  player1.collide(leveltwotSprite1);
  player1.collide(leveltwotSprite2);
  player1.collide(leveltwotSprite3);
  player1.collide(levelTwoGround);
  player1.collide(levelTwoTrack1);
  player1.collide(levelTwoTrack2); 
  player1.collide(levelTwoTrack3);
  player1.collide(levelTwoTrack4);
  player1.collide(levelTwoTrack5);                
  player1.collide(levelTwoTrack6);
  player1.collide(levelTwoTrack7);
  player1.collide(levelTwoTrack8);
  player1.collide(levelTwoTrack9);
  player1.collide(levelTwoTrack10);
  player1.collide(levelTwoTrack11);
  player1.collide(levelTwoTrack12);
  player1.collide(levelTwoTrack13);

  player1.collide(levelTwoSnowOBJ1);

  player1Life();
  player1Score();


  if(keyDown("right") || keyDown("D")){
    player1.x = player1.x + 10;
    player1.addAnimation("running",playerSideWays)
    player1.mirrorX(-1);
    player1.setCollider("rectangle",0,0,302,390);
    player1.scale = 0.18;
  }
  if(keyDown("left") || keyDown("A")){
    player1.x = player1.x - 10;
    player1.addAnimation("running",playerSideWays);
    player1.mirrorX(+1);
    player1.setCollider("rectangle",0,0,302,390);
    player1.scale = 0.18;
    
}
  if(keyDown("UP_ARROW") || (keyDown("W"))){
    player1.velocityY = -13;
  }

  player1.velocityY = player1.velocityY + 0.8;

  if(player1.isTouching(levelTwolockKey)){
     levelTwolockKey.destroy();
     leveltwotSprite3.destroy();
     prisonOpenSound.play();
  }
  if(player1.isTouching(treasure1)){
     treasure1.destroy();
     treausreCollectingSound.play();
  }

}

function player2Life(){

   if(player2.isTouching(levelThreetSprite1)){
      levelThreeLife = levelThreeLife -1;
      loseSound.play();
      player2.x = windowWidth/2-700;
      player2.y = windowHeight/2-120;
   }

   if(player2.isTouching(levelThreetSprite2)){
      levelThreeLife = levelThreeLife -1;
      loseSound.play();
      player2.x = windowWidth/2-700;
      player2.y = windowHeight/2-120;
   }

   if(player2.isTouching(level3JumpOb1)){
      levelThreeLife = levelThreeLife -1;
      loseSound.play();
      player2.x = windowWidth/2-700;
      player2.y = windowHeight/2-120;
   }

   if(player2.isTouching(level3JumpOb2)){
      levelThreeLife = levelThreeLife -1;
      loseSound.play();
      player2.x = windowWidth/2-700;
      player2.y = windowHeight/2-120;
   }

   if(player2.isTouching(level3JumpOb3)){
      levelThreeLife = levelThreeLife -1;
      loseSound.play();
      player2.x = windowWidth/2-700;
      player2.y = windowHeight/2-120;
   }

   if(player2.isTouching(level3JumpOb4)){
      levelThreeLife = levelThreeLife -1;
      loseSound.play();
      player2.x = windowWidth/2-700;
      player2.y = windowHeight/2-120;
   }

   if(player2.isTouching(groundLava)){
      burningSound.play();
      levelThreeLife = levelThreeLife -1;
      player2.x = windowWidth/2-700;
      player2.y = windowHeight/2-120;
   }

   if(levelThreeLife === 2){
     lev3Heart3.destroy();
   }

   if(levelThreeLife === 1){
      lev3Heart2.destroy();
    }

    if(levelThreeLife === 0){
      lev3Heart1.destroy();
      gameOver.visible = true;
      resetButton.visible = true;
      player2.destroy();
      level3JumpOb1.destroy();
      level3JumpOb2.destroy();
      level3JumpOb3.destroy();
      level3JumpOb4.destroy();
      lavaFall.destroy();
  
      if(mousePressedOver(resetButton)){
          gameState = "level-3";
          levelThreeLife = 3;
          threeScore = 0;
          level3JumpOb1Score = 0;
          level3JumpOb2Score = 0;
          level3JumpOb3Score = 0;
          level3JumpOb4Score = 0;
          gameOver.destroy();
          resetButton.destroy();
          player2Score();
          levelThreeSprite();
      }
   }

   /*if(levelTwoLife === 0){
      lev2Heart1.destroy();
      gameOver.visible = true;
      resetButton.visible = true;
      player1.destroy();
      levelTwoSnakeOB.velocityX = 0;
      levelTwoRounderOB.rotation = levelTwoRounderOB.rotation = 0;
  
      if(mousePressedOver(resetButton)){
          gameState = "level-2";
          levelTwoLife = 3;
          twoScore = 0;
          snakeScore = 0;
          gameOver.destroy();
          resetButton.destroy();
          levelTwoSprite();
      }
   }*/


   
}

function player2Score(){

   textSize(35)
  fill(255);
  text(" " + threeScore,windowWidth-440,windowHeight-665);

   if(player2.isTouching(levelThreeGem1)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem1.destroy(); 
   }

   if(player2.isTouching(levelThreeGem2)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem2.destroy(); 
   }

   if(player2.isTouching(levelThreeGem3)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem3.destroy(); 
   }

   if(player2.isTouching(levelThreeGem4)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem4.destroy(); 
   }

   if(player2.isTouching(levelThreeGem5)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem5.destroy(); 
   }

   if(player2.isTouching(levelThreeGem6)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem6.destroy(); 
   }

   if(player2.isTouching(levelThreeGem7)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem7.destroy(); 
   }

   if(player2.isTouching(levelThreeGem8)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem8.destroy(); 
   }

   if(player2.isTouching(levelThreeGem9)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem9.destroy(); 
   }

   if(player2.isTouching(levelThreeGem10)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem10.destroy(); 
   }

   if(player2.isTouching(levelThreeGem11)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem11.destroy(); 
   }

   if(player2.isTouching(levelThreeGem12)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem12.destroy(); 
   }

   if(player2.isTouching(levelThreeGem13)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem13.destroy(); 
   }

   if(player2.isTouching(levelThreeGem14)){
      crystalCollectSound.play();
     threeScore = threeScore +1;
     levelThreeGem14.destroy(); 
   }

   if(threeScore === 14){
     if(player2.isTouching(levelThreeFinishFlag)){
       gameState = "end";
     }
   }

   if(threeScore !== 14){
     if(player2.isTouching(levelThreeFinishFlag)){
       text("Not yet found the crystals",windowWidth/2,windowHeight/2);
     }
   }

   if(player2.isTouching(treasure2)){
      treasure2.destroy();
      treausreCollectingSound.play();
   }
   
}
function levelThree(){

   player1.destroy();
   snow.destroy();
   treasure1.destroy();
   levelTwoFinishFlag.destroy();
   leveltwotSprite1.destroy();
   leveltwotSprite2.destroy();
   leveltwotSprite3.destroy();
   levelTwolockKey.destroy();
   levelTwoGround.destroy();
   levelTwoTrack1.destroy();
   levelTwoTrack2.destroy();
   levelTwoTrack3.destroy();
   levelTwoTrack4.destroy();
   levelTwoTrack5.destroy();
   levelTwoTrack6.destroy();
   levelTwoTrack7.destroy();
   levelTwoTrack8.destroy();
   levelTwoTrack9.destroy();
   levelTwoTrack10.destroy();
   levelTwoTrack11.destroy();
   levelTwoTrack12.destroy();
   levelTwoTrack13.destroy();
   levelTwoInvisibleSprite1.destroy();
   levelTwoSnakeOB.destroy();
   levelTwoOB1.destroy();
   levelTwoOB2.destroy();
   levelTwoOB3.destroy();
   levelTwoRounderOB.destroy();
   lev2Heart1.destroy();
   lev2Heart2.destroy();
   lev2Heart3.destroy();
   levelTwoSnowOBJ1.destroy();

   volcano.visible = true;

   player2.visible = true;
   player2.collide(edges);
   

   image(scoreImg,windowWidth-500,windowHeight-700,60,40);

   if(frameCount % 4 === 0){
      lavaFall = createSprite(random(1,windowWidth),windowHeight-900,10,10);
      lavaFall.addImage(lavaFallImg);
      lavaFall.scale = 0.1;
      lavaFall.velocityY = 16;
   }

   groundLava.visible = true;

   levelThreetSprite1.visible = true;
   levelThreetSprite2.visible = true;
   levelThreetSprite3.visible = true;

   levelThreeTrack1.visible = true;
   levelThreeTrack2.visible = true;
   levelThreeTrack3.visible = true;
   levelThreeTrack4.visible = true;
   levelThreeTrack5.visible = true;
   levelThreeTrack6.visible = true;
   levelThreeTrack7.visible = true;
   levelThreeTrack8.visible = true;
   levelThreeTrack9.visible = true;
   levelThreeTrack10.visible = true;
   //levelThreeTrack1.debug = true;
   //levelThreeTrack2.debug = true;
   //levelThreeTrack3.debug = true;
   //levelThreeTrack4.debug = true;
   //levelThreeTrack5.debug = true;
   //levelThreeTrack6.debug = true;
   levelThreeTrack1.setCollider("rectangle",0,20,302,35);
   levelThreeTrack2.setCollider("rectangle",0,20,302,35);
   levelThreeTrack3.setCollider("rectangle",0,20,302,35);
   levelThreeTrack4.setCollider("rectangle",0,20,302,35);
   levelThreeTrack5.setCollider("rectangle",0,20,302,35);
   levelThreeTrack6.setCollider("rectangle",0,20,302,35);
   levelThreeTrack7.setCollider("rectangle",0,20,302,35);
   levelThreeTrack8.setCollider("rectangle",0,20,302,35);
   levelThreeTrack9.setCollider("rectangle",0,20,302,35);
   levelThreeTrack10.setCollider("rectangle",0,20,302,35);

   levelThreeFinishFlag.visible  = true;
   //levelThreeFinishFlag.debug = true;
   levelThreeFinishFlag.setCollider("rectangle",70,0,50,330);

   treasure2.visible = true;

   levelThreeGem1.visible = true;
   levelThreeGem2.visible = true;
   levelThreeGem3.visible = true;
   levelThreeGem4.visible = true;
   levelThreeGem5.visible = true;
   levelThreeGem6.visible = true;
   levelThreeGem7.visible = true;
   levelThreeGem8.visible = true;
   levelThreeGem9.visible = true;
   levelThreeGem10.visible = true;
   levelThreeGem11.visible = true;
   levelThreeGem12.visible = true;
   levelThreeGem13.visible = true;
   levelThreeGem14.visible = true;

   lev3Heart1.visible = true;
   lev3Heart2.visible = true;
   lev3Heart3.visible = true;

   player2.depth = levelThreeTrack1.depth;
   player2.depth = levelThreeTrack2.depth;
   player2.depth = levelThreeTrack3.depth;
   player2.depth = levelThreeTrack4.depth;
   player2.depth = levelThreeTrack5.depth;
   player2.depth = levelThreeTrack6.depth;
   player2.depth = levelThreeTrack7.depth;
   player2.depth = levelThreeTrack8.depth;
   player2.depth = levelThreeTrack9.depth;
   player2.depth = levelThreeTrack10.depth;
   player2.depth = player2.depth + 1;

   player2.collide(levelThreetSprite3);
   player2.collide(levelThreeTrack1);
   player2.collide(levelThreeTrack2);
   player2.collide(levelThreeTrack3);
   player2.collide(levelThreeTrack4);
   player2.collide(levelThreeTrack5);
   player2.collide(levelThreeTrack6);
   player2.collide(levelThreeTrack7);
   player2.collide(levelThreeTrack8);
   player2.collide(levelThreeTrack9);
   player2.collide(levelThreeTrack10);

   level3JumpOb1.visible = true;
   level3JumpOb2.visible = true;
   level3JumpOb3.visible = true;
   level3JumpOb4.visible = true;
  
   levelThreeBlackHole1.visible = true;
   //levelThreeBlackHole1.debug = true;
   levelThreeBlackHole1.setCollider("circle",0,0,150);
   levelThreeBlackHole2.visible = true;
   //levelThreeBlackHole2.debug = true;
   levelThreeBlackHole2.setCollider("circle",0,0,150);


   player2Score();
   player2Life();
   
   if(keyDown("right") || keyDown("D")){
      player2.x = player2.x + 10;
      player2.addAnimation("running",playerSideWays)
      player2.mirrorX(-1);
      player2.setCollider("rectangle",0,0,302,390);
      player2.scale = 0.18;
    }
    if(keyDown("left") || keyDown("A")){
      player2.x = player2.x - 10;
      player2.addAnimation("running",playerSideWays);
      player2.mirrorX(+1);
      player2.setCollider("rectangle",0,0,302,390);
      player2.scale = 0.18;
      
    }
    if(keyDown("UP_ARROW") || (keyDown("W"))){
      player2.velocityY = -13;
    }

   player2.velocityY = player2.velocityY + 0.8;

   if(level3JumpOb1Score === 0){
       level3JumpOb1.velocityY = - 10;
   }
   if(level3JumpOb1.isTouching(l3Invisible1)){
       level3JumpOb1.velocityY = + 10;
       level3JumpOb1Score = 1;
   }
   if(level3JumpOb1.isTouching(groundLava)){
      level3JumpOb1.velocityY = - 10;
      level3JumpOb1Score = 0;
   }


   if(level3JumpOb2Score === 0){
       level3JumpOb2.velocityY = + 10;
   }
   if(level3JumpOb2.isTouching(groundLava)){
      level3JumpOb2.velocityY = -10;
      level3JumpOb2Score = 1;
   }
   if(level3JumpOb2.isTouching(l3Invisible2)){
      level3JumpOb2.velocityY = + 10;
      level3JumpOb2Score = 0;
   }

   if(level3JumpOb3Score === 0){
      level3JumpOb3.velocityY = - 10;
   }
   if(level3JumpOb3.isTouching(levelThreetSprite3)){
      level3JumpOb3.velocityY = + 10;
      level3JumpOb3Score = 1;
   }
   if(level3JumpOb3.isTouching(groundLava)){
      level3JumpOb3.velocityY = -10;
      level3JumpOb3Score = 0;
   }

   if(level3JumpOb4Score === 0){
      level3JumpOb4.velocityY =  10;
   }
   if(level3JumpOb4.isTouching(groundLava)){
      level3JumpOb4.velocityY = -10;
      level3JumpOb4Score = 1;
   }
   if(level3JumpOb4.isTouching(l3Invisible3)){
      level3JumpOb4.velocityY = 10;
      level3JumpOb4Score = 0;
   }

   if(player2.isTouching(levelThreeBlackHole1)){
       blackHoleSound.play();
       player2.x = windowWidth - 800;
       player2.y = windowHeight - 650;   
   }
   if(player2.isTouching(levelThreeBlackHole2)){
      blackHoleSound.play();
      player2.x = windowWidth - 100;
      player2.y = windowHeight - 400;   
  }

}

function EndSprite(){
   endBg = createSprite(windowWidth/2-10,windowHeight/2,windowWidth,windowHeight);
   endBg.addImage(endImg);
   endBg.scale = 1.1;
   endBg.visible = false;
}

function End(){

   volcano.destroy();
   player2.destroy();
   levelThreetSprite1.destroy();
   levelThreetSprite2.destroy();
   levelThreetSprite3.destroy();
   levelThreeTrack1.destroy();
   treasure2.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   levelThreeGem1.destroy();
   groundLava.destroy();
   levelThreeTrack2.destroy();
   levelThreeTrack3.destroy();
   levelThreeTrack4.destroy();
   levelThreeTrack5.destroy();
   levelThreeTrack6.destroy();
   levelThreeTrack7.destroy();
   levelThreeTrack8.destroy();
   levelThreeTrack9.destroy();
   levelThreeTrack10.destroy();
   lev3Heart1.destroy();
   lev3Heart2.destroy();
   lev3Heart3.destroy();
   levelThreeFinishFlag.destroy();
   level3JumpOb1.destroy();
   level3JumpOb2.destroy();
   level3JumpOb3.destroy();
   level3JumpOb4.destroy();
   levelThreeBlackHole1.destroy();
   levelThreeBlackHole2.destroy();
   
   

   endBg.visible = true;

}