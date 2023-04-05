var soloSprite, soloImagem;
//é aqui que cria a variável
var trex, trexAnimacao;
var solo;
var nuvemImagem;

//criar as variáveis
var o1, o2, o3, o4, o5, o6;
//criar a variável PLAY

//criar a variável END

//criar a variável gameState

//criar a variável do grupo de cactos

//criar a variável do grupo de nuvens

function preload() {
    //é assim que carrega a animação
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");
    soloImagem = loadImage("solo.png");
    nuvemImagem = loadImage("nuvem.png");
    //carregar as imagens dos obstáculos
    o1 = loadImage("obs1.png");
    o2 = loadImage("obs2.png");
    o3 = loadImage("obs3.png");
    o4 = loadImage("obs4.png");
    o5 = loadImage("obs5.png");
    o6 = loadImage("obs6.png");
}


function setup() {
    createCanvas(600, 200);
    //é aqui que cria as sprites
    //solo
    solo = createSprite(300,180,600, 20);
    solo.addImage(soloImagem);
    solo.velocityX = -3;

    //solo invisível
    soloInvisivel = createSprite(300,195,600,20);
    soloInvisivel.visible = false;

    //trex 
    trex = createSprite(50,170,50,50);
    trex.addAnimation("correndo",trexAnimacao);
    trex.scale=0.5;

    //criar os grupos


}


function draw() {
    //pinta o fundo de uma cor
    background("white");

    //checar se gameState é PLAY

        criarCactos();
        //chama a função que cria as nuvens
        criarNuvens();
        //verifica se a pessoa apertou a tecla espaço
        if(keyDown("space") && trex.isTouching(solo) ){
            //dá velocidade para o trex voar
            trex.velocityY = -10;
        }

        //esse código dá gravidade para o trex cair
        trex.velocityY += 0.8;
        //manda o trex colidir com o solo
        trex.collide(soloInvisivel);

        //checa se o solo saiu da tela
        if(solo.x < 0){
            //se sim, ele volta para a metade do jogo 
            //e cria um loop infinito
            solo.x = width/2;
        }
        
        //checar se o trex está tocando no grupo de cacto


    
    //checar se gameState é END
    

    //desenha as sprites
    drawSprites();
}
//cria a função criarNuvens
function criarNuvens(){
    //determina o que ocorre a cada 90 quadros
    if(frameCount % 90 == 0){
        //cria a sprite da nuvem em uma posição Y aleatória
        var nuvem = createSprite(600,Math.round(random(70,150)),75,20);
        //adiciona a imagem
        nuvem.addImage(nuvemImagem);        
        //define velocidade
        nuvem.velocityX = -3;
        //define o tamanho
        nuvem.scale = 0.5;
        trex.depth = nuvem.depth + 1;
        nuvem.lifetime = 200;
        //adicionar as nuvens no grupo de nuvens

    }
}

function criarCactos(){
    if(frameCount % 60 == 0){
        var cacto = createSprite(600,170,50,50);
        var a = Math.round(random(1,6));
        switch(a){
            case 1: cacto.addImage(o1);
            break;
            case 2: cacto.addImage(o2);
            break;
            case 3: cacto.addImage(o3);
            break;
            case 4: cacto.addImage(o4);
            break;
            case 5: cacto.addImage(o5);
            break;
            case 6: cacto.addImage(o6);
            break;
        }
        cacto.velocityX = -3;
        cacto.scale = 0.5;
        cacto.lifetime = 200;
        //adicionar os cactos no grupo de cactos

    }
}