#pragma strict
var ball : GameObject;
var shootPoint : GameObject;
var shootPoint2 : GameObject;
var shootPoint3 : GameObject;
var power : int;
var player : GameObject;
var lockedSpell : GameObject;
var csScript : Targeting;
var gamestate : GameObject;
var pl : PlayerInfo;
private var isCasting;
private var step;
var temp : Vector3;
var flying : boolean;
var spellSlider: UnityEngine.UI.Slider;
var spellSliderObject : GameObject;var sp : GameObject;var sp2 : GameObject;var sp3 : GameObject;	
function Start () {
 gamestate = GameObject.Find ("GameController");
    pl = gamestate.GetComponent.<PlayerInfo>();
}

function Update () {

step = power * Time.deltaTime;
    if (Input.GetKeyDown ("4") && csScript.targeted == true) {
        	castBlackholebarrage();
    }
    if( sp==null && sp2==null && sp3==null){
    	flying = false;
    }
    if(flying == true){
    if(sp!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp.transform.position = Vector3.MoveTowards(sp.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp.transform.position = Vector3.MoveTowards(sp.transform.position, temp, step);
        }
    }
    if(sp2!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp2.transform.position = Vector3.MoveTowards(sp2.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp2.transform.position = Vector3.MoveTowards(sp2.transform.position, temp, step);
        }
    }
    if(sp3!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp3.transform.position = Vector3.MoveTowards(sp3.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp3.transform.position = Vector3.MoveTowards(sp3.transform.position, temp, step);
        }
    }
    }

}

 function castBlackholebarrage(){
  
    var body : Rigidbody;var body2 : Rigidbody;var body3 : Rigidbody;	
    var casted : boolean;		
         if(isCasting == true){
         }
         else{
          if (pl.queryMana() < 250) {
         	Debug.Log ("not enough mana");
            return;
        }
         	player.GetComponent (Animator).SetTrigger("BlackHoleBarrage");
         	pl.adjustMana (-250);
         	for(var i=0;i<=100;i+=20){
         	if(casted == false){
         		sp = Instantiate (ball,shootPoint.transform.position,Quaternion.identity);
         		sp2 = Instantiate (ball,shootPoint2.transform.position,Quaternion.identity);
         		sp3 = Instantiate (ball,shootPoint3.transform.position,Quaternion.identity);
         		casted=true;
         	}
         		spellSliderObject.SetActive(true);
         		spellSlider.value = i;
         			if(spellSlider.value >= 98){
         			flying = true;
        			
        			/*	body = sp.GetComponent (Rigidbody);
       				    body.AddRelativeForce (shootPoint.transform.forward.normalized * power);
       				    body2 = sp2.GetComponent (Rigidbody);
       				    body2.AddRelativeForce (shootPoint2.transform.forward.normalized * power);
       				    body3 = sp3.GetComponent (Rigidbody);
       				    body3.AddRelativeForce (shootPoint3.transform.forward.normalized * power);
       				    */

        					if(sp!= null && ball!=null){
            				Destroy(sp,5);Destroy(sp2,5);Destroy(sp3,5);
            				isCasting = false;
        					}  
         			}
         		yield WaitForSeconds(0.8f);
         	}
         	spellSliderObject.SetActive(false);
         }
     }
