<script>
	export let data = [
		{
			name: 'Myamsar',
			mask: '000000005294f82c469b3f3c',
			description: 'This agile twinsword assassin slices foes faster than the eye can follow.',
			skill_name: "Sic'Em Shadow",
			skill_description: [
				'Activate: ○○△△',
				'Combo: ○○□○',
				'Immobilise foes and tear them apart! Never releases prey during combo! Perfect for shield-bearing foes.'
			]
		},
		{
			name: 'Bowmunk',
			mask: '000000005778d32adc0b6a25',
			description: 'All-natural eco warrior alters environment to the advantage of your allies.',
			skill_name: 'Freaky Tree',
			skill_description: [
				'Activate: ○○△△ 〜 ××△△',
				'Combo: ××△△',
				'The Tree of Tranquillity and the power of nature nurtures your allies and heals their HP.'
			]
		},
		{
			name: 'Grenburr',
			mask: '000000003b469648f9ff9595',
			description:
				'Swinging a greatsword in both hands, this rugged unit deals destruction on the front lines.',
			skill_name: 'Guillotine',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Leap up high, spin in the air, and descend on foes with a great swing of a giant weapon. Major damage!'
			]
		},
		{
			name: 'Taterazay',
			mask: '000000005f057cff82da7959',
			description:
				'The basic shield class. This well-balanced unit holds the front lines and can attack with swords.',
			skill_name: 'Energy Field',
			skill_description: [
				'Activate: △△□○',
				'Combo: △△□○',
				'An invisible shield protects the entire team. Greatly reduces damage to team.',
				'〜 Combines with other hero skills 〜'
			]
		},
		{
			name: 'Destrobo',
			mask: '000000006f185c5009531a6f',
			description: 'This demolition unit uses dual arm weapons. Pulverises structures and forts.',
			skill_name: 'Crushcombo',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Swing both arms wildly to batter and knock back foes. Effective for demolishing rock walls and towers.'
			]
		},
		{
			name: 'Guardira',
			mask: '00000000ea27c3b3e312eee8',
			description:
				'This defensive unit bears two greatshields. Relies on other units to provide offence.',
			skill_name: 'Mega Shield',
			skill_description: [
				'Activate: △△□○',
				'Combo: △△□○',
				'Summon a huge shield that protects the rear lines. 10% of damage received by shield transfers to hero.'
			]
		},
		{
			name: 'Tondenga',
			mask: '0000000059e2853ed122ddaa',
			description: 'This fearsome giant bears a weapon in each hand and deals devastating damage.',
			skill_name: 'Giandeth',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Spin violently with weapons splayed in this dramatic centrifugal attack. Inches forward while deflecting foes.'
			]
		}
	]

	import BaseClass from './class.svelte'
</script>

<BaseClass {data} />
