#pragma strict
import Invector;
var ball: GameObject;
var player: GameObject;
var point1: GameObject;
var point2: GameObject;
var point3: GameObject;
var point4: GameObject;
var point5: GameObject;
var point6: GameObject;
var power: int;
var sp : GameObject;
var csScript : Targeting;
function Start () {

}

function Update () {
    if (Input.GetKeyDown ("1")&& csScript.targeted == true) {
        	castMeteors();
    }
    if(sp!=null){
    	var step = power * Time.deltaTime;
    	var temp : Vector3;
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		 temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp.transform.position = Vector3.MoveTowards(sp.transform.position, temp, step);
    	}
    	else{
    		 temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp.transform.position = Vector3.MoveTowards(sp.transform.position, temp, step);
        }
    }
}
function castMeteors(){
	player.GetComponent (Animator).SetTrigger("FlameAoe");
	//var sp2 : GameObject;var sp3 : GameObject;var sp4 : GameObject;var sp5 : GameObject;var sp6 : GameObject;
    //var body : Rigidbody//;var body2 : Rigidbody;var body3 : Rigidbody;var body4 : Rigidbody;var body5 : Rigidbody;var body6 : Rigidbody;
    sp = Instantiate (ball,point1.transform.position,Quaternion.identity);
   // sp2 = Instantiate (ball,point2.transform.position,Quaternion.identity);
   // sp3 = Instantiate (ball,point3.transform.position,Quaternion.identity);
   // sp4 = Instantiate (ball,point4.transform.position,Quaternion.identity);
  //  sp5 = Instantiate (ball,point5.transform.position,Quaternion.identity);
  //  sp6 = Instantiate (ball,point6.transform.position,Quaternion.identity);
   // body = sp.GetComponent (Rigidbody);//body2 = sp2.GetComponent (Rigidbody);body3 = sp3.GetComponent (Rigidbody);
  //  body4 = sp4.GetComponent (Rigidbody);body5 = sp5.GetComponent (Rigidbody);body6 = sp6.GetComponent (Rigidbody);
    //body.AddRelativeForce (point1.transform.forward.normalized * power);
  //  body2.AddRelativeForce (point2.transform.forward.normalized * power);
  //  body3.AddRelativeForce (point3.transform.forward.normalized * power);
  //  body4.AddRelativeForce (point4.transform.forward.normalized * power);
 //   body5.AddRelativeForce (point5.transform.forward.normalized * power);
 //   body6.AddRelativeForce (point6.transform.forward.normalized * power);
    if(sp!= null && ball!=null){
    Destroy(sp,1.7f);//Destroy(sp2,5);Destroy(sp3,5);Destroy(sp4,5);Destroy(sp5,5);Destroy(sp6,5);
}
}