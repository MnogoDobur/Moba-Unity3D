using UnityEngine;
using System.Collections;
using Invector;
public class elfCleave : MonoBehaviour {
	public GameObject theBall;
	public GameObject effect;
	public GameObject jumpAttackSpellObject;
	public GameObject handEffect1;
	public GameObject handEffect2;
	public GameObject theWeapon;

	public GameObject weaponEffectFirstSpell;
	public GameObject weaponHitBox;
	// Use this for initialization
	bool cleaveActive;
	private GameObject temp;
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown ("1") && this.GetComponent<vCharacter> ().currentStamina >= 30) {
			this.GetComponent<vCharacter> ().currentStamina -= 30;
			weaponHitBox.GetComponent<vMeleeWeapon> ().damage.value += 40;
			weaponEffectFirstSpell.SetActive (true);
			startMCoroutineFirstSpell ();
		}

		if (Input.GetKeyDown ("2") && this.GetComponent<vCharacter> ().currentStamina >= 20) {
			this.GetComponent<vCharacter> ().currentStamina -= 20;
			theBall.GetComponent<vExplosionDamage> ().layer.value = 512;
			if (cleaveActive == false) {
				cleaveActive = true;
				startMCoroutineCleave ();
			}
		}

		if (Input.GetKeyDown ("3") && this.GetComponent<vCharacter> ().currentStamina >= 20) {
			this.GetComponent<vCharacter> ().currentStamina -= 20;
			this.GetComponent<Animator> ().SetTrigger ("JumpAttack");
			handEffect1.SetActive (true);handEffect2.SetActive (true);
			startMCoroutineJumpAttack ();
		}

		if(Input.GetKeyDown("4") && this.GetComponent<vCharacter> ().currentStamina >= 33){
			this.GetComponent<vThirdPersonMotor> ().extraMoveSpeed = 10;
			this.GetComponent<vCharacter> ().currentStamina -= 33;
			startMCoroutineSprint ();
		}
	
}

	IEnumerator cleave()
	{
		this.GetComponent<Animator> ().SetTrigger ("Finisher");
		for(int val = 0; val <= 100; val+=8)
		{

				

			if (val >= 80) {
				effect.SetActive (true);
				theBall.GetComponent<vExplosionDamage> ().layer.value = 0;
			}
			yield return new WaitForSeconds (0.06f);
		}
		effect.SetActive (false);
		cleaveActive = false;
	}

	IEnumerator sprint()
	{
		for(int val = 0; val <= 100; val+=8)
		{
			if (val >= 84) {
				this.GetComponent<vThirdPersonMotor> ().extraMoveSpeed = 0;
			}
			yield return new WaitForSeconds (0.35f);
		}
		//effect.SetActive (false);
	}
	IEnumerator jumpAttack()
	{
		theWeapon.SetActive (false);
		for(int val = 0; val <= 100; val+=8)
		{
			if (val >= 84 && val< 90) {
				Destroy(Instantiate (jumpAttackSpellObject, this.transform.position, Quaternion.identity),3);
				handEffect1.SetActive (false);handEffect2.SetActive (false);
			}
			yield return new WaitForSeconds (0.05f);
		}
		theWeapon.SetActive (true);
		//effect.SetActive (false);
	}
	IEnumerator firstSpell()
	{
		for(int val = 0; val <= 100; val+=8)
		{
			yield return new WaitForSeconds (2.5f);
		}
		weaponHitBox.GetComponent<vMeleeWeapon> ().damage.value -= 40;
		weaponEffectFirstSpell.SetActive (false);
	}
	public void startMCoroutineFirstSpell()
	{
		StartCoroutine(firstSpell());
	}

	public void startMCoroutineJumpAttack()
	{
		StartCoroutine(jumpAttack());
	}

	public void startMCoroutineSprint()
	{
		StartCoroutine(sprint());
	}

	public void startMCoroutineCleave()
	{
		StartCoroutine(cleave());
	}
}