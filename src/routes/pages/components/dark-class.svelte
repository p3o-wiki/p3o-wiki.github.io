<script>
	export let data = [
		{
			name: 'Buzzcrave',
			mask: '000000009edcb1cb5906074c',
			description:
				'Pike Cavalry class serving the Archfield of Restraint. Fillets the enemy frontline with horseback pike attack. Fastest class of all!',
			skill_name: 'Burning Fly',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Summon 20 flame flies which seek out their target and dive-bomb like angry torpedoes.'
			]
		},
		{
			name: 'Ravenous',
			mask: '000000009ea9f4c2194d9c40',
			description:
				'Giant Scythe class serving the Archfiend of Earnestness. Crowd control using short-range attacks and mid-range tornado.',
			skill_name: 'Gong Tornado',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Forms giant tornadoes which advance while tossing foes into the air and causing widespread destruction.'
			]
		},
		{
			name: 'Sonarchy',
			mask: '0000000087b2d05749e2bdd3',
			description:
				'Eerie Minstrel serving the Archfiend of Justice. Sonic balls for damage and status effect. Vampire ability absorbs enemy life.',
			skill_name: 'Sonic Doom',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Disperses 12 sonic balls which inflict heavy damage and cause status effects (poison and sleep).'
			]
		},
		{
			name: 'Ragewolf',
			mask: '000000006666ac76d88bc99a',
			description:
				'Beast Warrior class serving the Archfiend of Valour Attack with claws, destroy obstacles with boulders. Unstoppable regeneration.',
			skill_name: 'Drill Punch',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Move in close and hit with a one-two punch. Rapidly spinning arms rip apart enemies.'
			]
		},
		{
			name: 'Naughtyfins',
			mask: '00000000d705fae9f640766c',
			description:
				'Freeze Spear class serving the Archfiend of Purity. Summons rain to boost all skills: attack, defence, and recovery!',
			skill_name: 'Please Freeze',
			skill_description: [
				'Activate: ○○△△ 〜 ○○□○',
				'Combo: ○○□○',
				'These frigid spears stir up arctic winds when they hit the ground, freezing foes and dousing fire.'
			]
		},
		{
			name: 'Slogturtle',
			mask: '00000000a27e81ca33532753',
			description:
				'Greatshield class serving the Archfiend of Adamance. Unparalleled stamina! Can learn ability that deflects enemy attacks.',
			skill_name: 'Antimagic',
			skill_description: [
				'Activate: △△□○',
				'Combo: △△□○',
				'Creates a magic shell which totally nullifies non-physical magic attacks and status effects.'
			]
		},
		{
			name: 'Covet-hiss',
			mask: '00000000461eb9d6a87e162e',
			description:
				'Cannon class serving the Archfiend of Tolerance. Scorches the battlefield with burn effects, and can learn to use poison!',
			skill_name: 'Double Ba-bam',
			skill_description: [
				'Activate: ○○△△ 〜 ○○□○',
				'Each of the two super cannon shells fired consecutively inflict absolutely devastating damage.'
			]
		}
	]

	import BaseClass from './class.svelte'
</script>

<BaseClass {data} />
