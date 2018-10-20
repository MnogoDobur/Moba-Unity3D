using UnityEngine;
using System.Collections;
using UnityEngine.UI;
public class PlayerStats : MonoBehaviour {
	public int xp;public int xpForSlider;private int tempXp;
	private int xpLvlTwo = 320;private int xpLvlThree = 1020;private int xpLvlFour = 1620;
	private int xpLvlFive = 2220;private int xpLvlSix = 2920;private int xpLvlSeven = 3720;
	private int kills;
	private int level=1;
	public GameObject levelEffect;
	public Text levelText;
	public Slider levelSlier;
	private bool leveledUp;
	public int talentPoints;
	public GameObject upgrades;
	private bool upgradesMenuCheck;
	public Texture decal;
	public GameObject theCam;
	public GameObject skillUpgradeMenu;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		if (skillUpgradeMenu.activeSelf == true && Input.GetKeyDown (KeyCode.Escape)) {
			skillUpgradeMenu.SetActive (false);
		}
		if(Input.GetKeyDown("p")){
			upgrades.gameObject.SetActive (true);
			Cursor.visible = true;
			upgradesMenuCheck = true;
		}
		if (Input.GetKeyDown (KeyCode.Escape) && upgradesMenuCheck == true) {
			upgrades.gameObject.SetActive (false);
		}
		if (xp > tempXp) {
			if (!leveledUp) {
				levelSlier.value += xp;
				tempXp = xp;
			} else {
				levelSlier.value += xp;
				tempXp = xp;
			}
		}
		leveledUp = false;
		if (level == 1 && xp >= xpLvlTwo ) {
			level++;
			levelEffect.SetActive (true);
			levelText.gameObject.SetActive(true);
			levelText.text = "Congratulations, you have reached level " + level;
			xp = 0;
			leveledUp = true;
			levelSlier.maxValue = 1020f;
			talentPoints+=5;
		}
		if (level == 2 && xp >= xpLvlThree ){
			level++;
			levelEffect.SetActive (false);
			levelEffect.SetActive (true);
			levelText.text = "Congratulations, you have reached level " + level;
			xp = 0;
			leveledUp = true;
			levelSlier.maxValue = 1620;
			talentPoints+=8;
		}
		if (level == 3 && xp >= xpLvlFour ){
			level++;
			levelEffect.SetActive (false);
			levelText.gameObject.SetActive(true);
			levelEffect.SetActive (true);
			levelText.text = "Congratulations, you have reached level " + level;
			xp = 0;
			leveledUp = true;
			levelSlier.maxValue = 2220;
			talentPoints+=10;
		}
		if (level == 4 && xp >= xpLvlFive ){
			level++;
			levelEffect.SetActive (false);
			levelText.gameObject.SetActive(true);
			levelEffect.SetActive (true);
			levelText.text = "Congratulations, you have reached level " + level;
			xp = 0;
			leveledUp = true;
			levelSlier.maxValue = 2920;
			talentPoints+=13;
		}
		if (level == 5 && xp >= xpLvlSix ){
			level++;
			levelEffect.SetActive (false);
			levelText.gameObject.SetActive(true);
			levelEffect.SetActive (true);
			levelText.text = "Congratulations, you have reached level " + level;
			xp = 0;
			leveledUp = true;
			levelSlier.maxValue = 3720;
			talentPoints+=13;
		}
		if (level == 6 && xp >= xpLvlSeven){
			level++;
			levelEffect.SetActive (false);
			levelText.gameObject.SetActive(true);
			levelEffect.SetActive (true);
			levelText.text = "Congratulations, you have reached level " + level;
			xp = 0;
			leveledUp = true;
			levelSlier.maxValue = 5000;
			talentPoints+=15;
		}
		levelSlier.value = xp;

	}
	public void openUpgradeStats(){
		upgrades.SetActive (false);
		skillUpgradeMenu.SetActive (true);
	}
}