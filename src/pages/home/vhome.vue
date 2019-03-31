<template>
    <div>
      <vhead></vhead>
      <vswiper></vswiper>
      <vfeilei></vfeilei>
      <vremen></vremen>
      <vtest></vtest>
    </div>
</template>
<script>
import vhead from './zujian/vhead'
import vswiper from './zujian/vswiper'
import vfeilei from './zujian/vfeilei'
import vremen from './zujian/vremen'
import vtest from './zujian/vtest'
export default {
  name: 'vhome',
  components: {
    vhead,
    vswiper,
    vfeilei,
    vremen,

  
  }
}
</script>

