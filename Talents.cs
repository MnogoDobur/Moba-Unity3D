using UnityEngine;
using System.Collections;
using Invector;

public class Talents : MonoBehaviour {
	private GameObject character;
	private bool charFound;
	public GameObject chosenChar;
	public GameObject elf;
	public GameObject warrior;
	public GameObject arcaneBoltWitch;
	private GameObject gameController;
	private bool firstRun =true;
	public UnityEngine.UI.Slider manaSlider;
	// Use this for initialization
	void Start () {
		gameController = GameObject.Find ("GameController");
	}
	
	// Update is called once per frame
	void Update () {
		if(firstRun){
			setBaseSpellDamage (1, arcaneBoltWitch);
			Debug.Log ( arcaneBoltWitch.GetComponent<vExplosionDamage>().damage.value+ " test");
			firstRun =false;
		}

		Debug.Log (arcaneBoltWitch.GetComponent<vExplosionDamage> ().damage.value + " arcane bolt spell dmg");
		if (!charFound) {
			if (elf.activeSelf == true) {
				chosenChar = elf;
				charFound = true;
			}
			if (warrior.activeSelf == true) {
				chosenChar = warrior;
				charFound = true;
			}
		}
	}

	public void upgradeSpell(){
	}
	public void upgradeStats(){
	}
	public void upgradeAlly(){
	}



	public void upgradeHealth(){
		chosenChar.GetComponent<vCharacter> ().maxHealth += 30;
		chosenChar.GetComponent<vCharacter> ().currentHealth += 30;
	}
	public void upgradeMana(){
		manaSlider.maxValue += 50;	
	}
	public void upgradeMovementSpeed(){
	}
	public void upgradeStaminaRecovery(){
		chosenChar.GetComponent<vCharacter> ().staminaRecovery += 0.2f; 
	}
	public void upgradeHealthRecovery(){
		chosenChar.GetComponent<vCharacter> ().healthRecovery += 0.01f ;
	}
	public void upgradeAttackPower(){
	}
	public void upgradeEnergy(){
		chosenChar.GetComponent<vThirdPersonMotor> ().maxStamina += 50;
	}

	public void upgradeArcaneBoltsElf(){
		arcaneBoltWitch.GetComponent<vExplosionDamage> ().damage.value += 5;
	}






	public void upgradeAllyHealth(){
		GameObject[] allyForces = GameObject.FindGameObjectsWithTag ("Boss");
		for (int i = 0; i < allyForces.Length; i++) {
			allyForces [i].GetComponent<v_AIController> ().maxHealth += 30;
		}
	}
	public void upgradeAllyHealthRecovery(){
		GameObject[] allyForces = GameObject.FindGameObjectsWithTag ("Boss");
		for (int i = 0; i < allyForces.Length; i++) {
			allyForces [i].GetComponent<v_AIController> ().healthRecovery += 0.1f;
		}
	}
	public void upgradeAllyAttackSpeed(){
		GameObject[] allyForces = GameObject.FindGameObjectsWithTag ("Boss");
		for (int i = 0; i < allyForces.Length; i++) {
			allyForces [i].GetComponent<v_AIController> ().minTimeToAttack -= 0.2f;
		}
	}


	public void setBaseSpellDamage(int type,GameObject theSpell){
		switch (type) {
		case '1':
			theSpell.gameObject.GetComponent<vExplosionDamage> ().damage.value = 10;
			Debug.Log (arcaneBoltWitch.GetComponent<vExplosionDamage> ().damage.value + " test ");
			break;
		case '2':
			theSpell.GetComponent<vExplosionDamage> ().damage.value = 20;
			break;
		case '3':
			theSpell.GetComponent<vExplosionDamage> ().damage.value = 30;
			break;
		}
	}
}


