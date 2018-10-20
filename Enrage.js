#pragma strict
var player: GameObject;
var enrageShield: GameObject;
var enrageFlame1: GameObject;
var enrageFlame2: GameObject;
var pointShield : GameObject;
var arm1: GameObject;
var amr2: GameObject;
private var enrageOne: GameObject;private var enrageTwo: GameObject;private var enrageThree: GameObject;
	 var sp : GameObject;	
	 var sp1: GameObject;
	 var sp2: GameObject;
function Start () {

}

function Update () {
if (Input.GetKeyDown ("4")) {
        	castEnrage();
	}
	if(sp!=null){
	        	enrageOne = GameObject.Find ("EnragePart1(Clone)");
        	enrageTwo = GameObject.Find ("EnragePart2(Clone)");
        	enrageThree = GameObject.Find ("EnragePart3(Clone)");
    	enrageOne.transform.position = new Vector3(pointShield.transform.position.x,pointShield.gameObject.transform.position.y,pointShield.gameObject.transform.position.z);
    	enrageTwo.transform.position = new Vector3(arm1.transform.position.x,arm1.transform.position.y,arm1.transform.position.z);
    	enrageThree.transform.position = new Vector3(amr2.transform.position.x,amr2.transform.position.y,amr2.transform.position.z);
    	}

}
function castEnrage(){

     player.GetComponent (Animator).SetTrigger("ManaShield");
     sp = Instantiate (enrageShield,pointShield.transform.position,Quaternion.identity);
     sp1 = Instantiate (enrageFlame1,arm1.transform.position,Quaternion.identity);
     sp2 = Instantiate (enrageFlame2,amr2.transform.position,Quaternion.identity);
     if(sp!= null && enrageShield!=null){
            				Destroy(sp,15);Destroy(sp1,15);Destroy(sp2,15);
        					}  
}