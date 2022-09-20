<script lang="ts">
export default defineComponent({
  setup() {
    return () => h('div', { class: 'tip' }, 'Start your first page here');
  }
});
</script>
<style scoped>
.tip {
  font-size: 20px;
  text-shadow: 2px 2px 8px #FF0000;
}
</style>