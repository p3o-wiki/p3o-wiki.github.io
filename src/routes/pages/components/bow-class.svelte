<script lang="ts">
	export let data = [
		{
			name: 'Oohoroc',
			mask: '00000000c695e1a0ff63468a',
			description:
				'This black mage is an expert of attack magic. Strength of spells improves with use',
			skill_name: 'Armageddon',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Countless shooting stars coalesce and form magic fireballs which rain down upon the entire earth.'
			]
		},
		{
			name: 'Pingrek',
			mask: '0000000016be5c51d122ddaa',
			description:
				'This white mage serves as healer and support unit, and blunts attacks with an ice wall.',
			skill_name: 'Healing Chateau',
			skill_description: [
				'Activate: ○○△△ 〜 △△□○',
				'Combo: △△□○',
				'Creates a giant ice castle that emits a visible energy which gradually heals allies (DH only).'
			]
		},
		{
			name: 'Cannogabang',
			mask: '000000001cd1315793fc7703',
			description:
				'This devastating ranged cannon unit supports troops from the rear. Weak at close-range.',
			skill_name: 'Slinger',
			skill_description: [
				'Activate: ○○△△ 〜 ○○□○',
				'Execute powerful cannon attack.',
				'Cannon: glowing shells.',
				'Blunderbuss: piercing fire spray.',
				'Laser: ultra-ginormous laser.'
			]
		},
		{
			name: 'Yumiyacha',
			mask: '0000000098e8ef493218954c',
			description:
				'The basic archer class. Launches attacks from the near. Favourable winds carry the arrows further.',
			skill_name: 'Meteo Arrow',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Fire a barrage of arrows into the sky which fall down a moment later and impale enemies, causing heavy damage.'
			]
		},
		{
			name: 'Alosson',
			mask: '000000001a01ef80db8227e5',
			description:
				'This long-range archer fires volleys of arrows. Learns to use longbows with experience.',
			skill_name: 'Arrow Shower',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Rapidly fire glowing arrows! Power of glow enhances with high volume. Powerful weapon with fired rapidly.'
			]
		},
		{
			name: 'Wondabarappa',
			mask: '00000000d847ea797ac58fd6',
			description:
				'This intrepid minstrel blankets foes with sonic balls which can also cause stagger.',
			skill_name: 'Mucharapapa',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Fire three sonic balls per shot. The balls bounce about unpredictably and relentlessly inflict damage upon foes.'
			]
		},
		{
			name: 'Jamsch',
			mask: '00000000d1894a65d122ddaa',
			description:
				'This dark minstrel has weak offence, but its sonic balls cause various status effects.',
			skill_name: 'Airborne Threat',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Fire poisonous spores into the sky to inflict poison damage on all foes. Destination determined by wind.'
			]
		}
	]

	import BaseClass from './class.svelte'
</script>

<BaseClass {data} />
