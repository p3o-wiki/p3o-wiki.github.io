<script>
	export let data = [
		{
			name: 'Pyokorider',
			mask: '0000000089872e3d2c22df55',
			description:
				'A knight on horseback that gallops across the battlefield, plunging straight into enemy lines.',
			skill_name: 'Illusion',
			skill_description: [
				'Activate: ○○△△ 〜 ○○□○',
				'Combo: ○○□○',
				'Create a doppelganger of hero that charges into enemy lines while the original stays safely at the rear.'
			]
		},
		{
			name: 'Cannassault',
			mask: '0000000004d514971826949a',
			description:
				'This melee unit crushes foes with its wheel and battle axe. Powerful, but weak at close-range.',
			skill_name: 'Thwack-mash',
			skill_description: [
				'Activate: ○○△△ 〜 ○○□○',
				'Combo: ○○□○',
				'Attack with weapon-chariot combo. First, knock down foe with weapon, then grind with wheels of chariot.'
			]
		},
		{
			name: 'Charibasa',
			mask: '00000000dbc298cefbea149f',
			description:
				'This ranged chariot scatters foes with its rapidly-spinning wheel and throws spears.',
			skill_name: 'Shwoop-fling',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Attacks near and far simultaneously. Throw spears to pierce far-away foes, and spin wheels to toss those nearby.'
			]
		},
		{
			name: 'Yarida',
			mask: '000000007995625382da7959',
			description:
				'The basic spear class. Scatters the foe from behind the front lines. Lots of room to grow.',
			skill_name: 'Fear Spear',
			skill_description: [
				'Activate: ○○□○',
				'Combo: ○○□○',
				'Throw powerful glowing spears that explode upon landing. Explosions inflict damage over a wide range.'
			]
		},
		{
			name: 'Kibadda',
			mask: '000000004cb05047c2df7712',
			description:
				'Mounted warrior that can charge into enemy lines. Carries a shield for extra protection.',
			skill_name: 'Mad Charge',
			skill_description: [
				'Activate: ○○△△ 〜 ○○□○',
				'Combo: ○○□○',
				'Charge at foes at high speeds with a glowing mantle that boosts attack power. Hit hard, then back off!'
			]
		},
		{
			name: 'Piekron',
			mask: '00000000b9fc95014d2156c2',
			description: 'This spear unit excels in the rain. Carries a shield for defence.',
			skill_name: 'Concentrate',
			skill_description: [
				'Activate: ○○△△',
				'Combo: ○○△△',
				'Long-lasting boost for attack power of entire team. Use combo to boost effect.',
				'〜 Combines with other hero skills 〜'
			]
		},
		{
			name: 'Wooyari',
			mask: '00000000b46813c8b0a934f0',
			description:
				'This pike unit, the most advanced spear class, thrashes the enemy front line with its long reach.',
			skill_name: 'Flamespin',
			skill_description: [
				'Activate: ○○△△ 〜 ○○□○',
				'Combo: ○○□○',
				'Plough forward while deflecting enemy ranged attacks with flaming spears attached to rapidly spinning wheels.'
			]
		}
	]

	import BaseClass from './class.svelte'
</script>

<BaseClass {data} />
