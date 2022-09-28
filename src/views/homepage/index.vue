<script lang="tsx">
import { Button, Cell } from 'vant';
import { throttled } from '@/utils/lodash';
export default defineComponent({
  setup() {
    const handleThrottled = (text: string) => {
      console.log(text);
    };
    const button = h(Button, {
      color: '#7232dd',
      onClick() {
        throttled(handleThrottled, '1.5S内只输出一次');
      }
    }, { default: () => '点我测试节流' });
    const el = h(Cell, null, { default: () => button });
    return () => el;
  }
});
</script>