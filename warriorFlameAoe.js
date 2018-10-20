#pragma strict
var ball: GameObject;
var player: GameObject;
var point1: GameObject;
var point2: GameObject;
var point3: GameObject;
var point4: GameObject;
var point5: GameObject;
var point6: GameObject;
var point7: GameObject;
var power: int;
function Start () {

}

function Update () {
    if (Input.GetKeyDown ("2")) {
        	castFlameAoe();
    }

}
function castFlameAoe(){
	player.GetComponent (Animator).SetTrigger("FlameAoe");
	var sp : GameObject;var sp2 : GameObject;var sp3 : GameObject;var sp4 : GameObject;var sp5 : GameObject;var sp6 : GameObject;var sp7 : GameObject;	
    var body : Rigidbody;var body2 : Rigidbody;var body3 : Rigidbody;var body4 : Rigidbody;var body5 : Rigidbody;var body6 : Rigidbody;var body7 : Rigidbody;	
    sp = Instantiate (ball,point1.transform.position,Quaternion.identity);
    sp2 = Instantiate (ball,point2.transform.position,Quaternion.identity);
    sp3 = Instantiate (ball,point3.transform.position,Quaternion.identity);
    sp4 = Instantiate (ball,point4.transform.position,Quaternion.identity);
    sp5 = Instantiate (ball,point5.transform.position,Quaternion.identity);
    sp6 = Instantiate (ball,point6.transform.position,Quaternion.identity);
    sp7 = Instantiate (ball,point7.transform.position,Quaternion.identity);
    body = sp.GetComponent (Rigidbody);body2 = sp2.GetComponent (Rigidbody);body3 = sp3.GetComponent (Rigidbody);
    body4 = sp4.GetComponent (Rigidbody);body5 = sp5.GetComponent (Rigidbody);body6 = sp6.GetComponent (Rigidbody);
    body7 = sp7.GetComponent (Rigidbody);
    body.AddRelativeForce (point1.transform.forward.normalized * power);
    body2.AddRelativeForce (point2.transform.forward.normalized * power);
    body3.AddRelativeForce (point3.transform.forward.normalized * power);
    body4.AddRelativeForce (point4.transform.forward.normalized * power);
    body5.AddRelativeForce (point5.transform.forward.normalized * power);
    body6.AddRelativeForce (point6.transform.forward.normalized * power);
    body7.AddRelativeForce (point7.transform.forward.normalized * power);
    if(sp!= null && ball!=null){
    Destroy(sp,5);Destroy(sp2,5);Destroy(sp3,5);Destroy(sp4,5);Destroy(sp5,5);Destroy(sp6,5);Destroy(sp7,5);
}
}