#pragma strict
var ball : GameObject;
var shootPoint : GameObject;
var power : int;
//var indicator:GameObject;
var player : GameObject;
var gamestate : GameObject;
var pl : PlayerInfo;
private var isCasting;
var csScript : Targeting;
var spellSlider: UnityEngine.UI.Slider;
var spellSliderObject : GameObject;
var rotation : boolean;
function Start () {
 gamestate = GameObject.Find ("GameController");
    pl = gamestate.GetComponent.<PlayerInfo>();

}

	function Update () {


	    


	    if (Input.GetKeyDown ("3")/* && rotation == false*/ && csScript.targeted == true) {
	    	//rotation = true;
	    //}
	  /*  if(rotation == true){
				indicator.SetActive(true);
				indicator.transform.RotateAround(transform.position, transform.up, Time.deltaTime * 90f);
			}
			if(Input.GetKeyDown ("3")/*Input.GetMouseButtonDown(0)*///){
			//	indicator.SetActive(false);
	        	castBlackHole();
	        	}
	    } 

	

 function castBlackHole(){
  var sp : GameObject;	
    var body : Rigidbody;	
    var casted : boolean;		
	  if(isCasting == true){
         }
         else{
         if (pl.queryMana() < 200) {
         	Debug.Log ("not enough mana");
            return;
        }
         	player.GetComponent (Animator).SetTrigger("Blackhole");
         	pl.adjustMana (-200);
         	for(var i=0;i<=100;i+=20){
         	if(casted == false){
         		sp = Instantiate (ball,csScript.theTargetedObject.transform.position,Quaternion.identity);

         		casted=true;
         	}
         		body = sp.GetComponent (Rigidbody);
         		spellSliderObject.SetActive(true);
         		spellSlider.value = i;
         			if(spellSlider.value >= 98){
        					if(sp!= null && ball!=null){
            				Destroy(sp,5);
            				isCasting = false;
        					}  
         			}
         		yield WaitForSeconds(0.6f);
         	}
         	spellSliderObject.SetActive(false);
         }
     }