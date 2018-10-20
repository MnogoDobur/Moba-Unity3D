#pragma strict
var ball : GameObject;
var casted : boolean;
var player : GameObject;
var shootPoint: GameObject;
var theShield : GameObject;
var pl : PlayerInfo;
var gamestate : GameObject;
private var isCasting;

function Start () {
 gamestate = GameObject.Find ("GameController");
    pl = gamestate.GetComponent.<PlayerInfo>();
}

function Update () {

    if (Input.GetKeyDown ("5")) {
        if(player.activeSelf== true){
        	castManashield();
    } 
 }
}

 function castManashield(){
  var sp : GameObject;	
  if (pl.queryMana() < 100) {
         	Debug.Log ("not enough mana");
            return;
        }
        pl.adjustMana (-100);
         	player.GetComponent (Animator).SetTrigger("ManaShield");
         		sp = Instantiate (ball,player.transform.position,Quaternion.identity);
         		Destroy(sp,4);
         	
     }