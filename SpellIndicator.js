#pragma strict
var indicator:GameObject;
function Start () {

}

function Update () {
while(Input.GetMouseButtonDown(0))
{
	indicator.transform.Rotate(0, Input.mousePosition.y, 0, Space.Self);
}
}