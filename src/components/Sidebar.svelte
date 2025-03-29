<script>
	import { Plus } from '@lucide/svelte';
</script>

<aside class="flex w-full max-w-xs flex-col gap-8 rounded bg-neutral-900 p-4">
	<ul class="flex items-center justify-between gap-4">
		<li><a href="/"><img src="/favicon.ico" alt="icon" class="size-8" /></a></li>
		<li>
			<button
				class="inline-flex cursor-pointer rounded-full bg-emerald-800 p-2 text-emerald-400 transition-transform duration-300 hover:scale-90"
			>
				<Plus class="size-4" />
			</button>
		</li>
	</ul>
	<div class="flex-1"></div>
</aside>
