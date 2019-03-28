<template>
    <div>
      <vhead></vhead>
      <vswiper></vswiper>
      <vfeilei></vfeilei>
    </div>
</template>
<script>
import vhead from './zujian/vhead'
import vswiper from './zujian/vswiper'
import vfeilei from './zujian/vfeilei'
export default {
  name: 'vhome',
  components: {
    vhead,
    vswiper,
    vfeilei
  }
}
</script>

