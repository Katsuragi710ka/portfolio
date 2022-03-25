<template>
  <div class="timeline" :class="classNames" >
    <div class="timeline-progress odd">
      <div class="timeline-event">
        <typography className="timeline-date" variant="h5" text="2016年3月" />
        <typography className="timeline-topic" variant="h4" text="東海大学を卒業" />
      </div>
    </div>
    <div class="timeline-progress even">
      <div class="timeline-event">
        <typography className="timeline-date" variant="h5" text="2016年4月" />
        <typography className="timeline-topic" variant="h4" text="オイレス工業（株）に就職" />
      </div>
    </div>
    <div class="timeline-progress odd">
      <div class="timeline-event">
        <typography className="timeline-date" variant="h5" text="2018年3月" />
        <typography className="timeline-topic" variant="h4" text="オイレス工業（株）を退職" />
      </div>
    </div>
    <div class="timeline-progress even">
      <div class="timeline-event">
        <typography className="timeline-date" variant="h5" text="2018年4月" />
        <typography className="timeline-topic" variant="h4" text="M3キャリア（株）にWebエンジニアとして就職" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import Typography from '@/components/atoms/Typography.vue';

@Component({
  components: {
    Typography
  }
})
export default class Timeline extends Mixins(ClassName) {

}
</script>
<style lang="scss" scoped>
  .timeline {
    position: relative;
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    &:after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: rgba(19, 62, 124, 1);
      top: 0;
      bottom: 0;
      margin-left: -3px;
    }

    .timeline-progress {
      position: relative;
      width: calc(50% - 3px);
      padding-bottom: 45px;

      .timeline-event {
        width: 235px;
        padding: 0;
        position: relative;
        border-radius: 6px;

        .timeline-date {
          color: rgba(110, 110, 110, 1);
          margin-bottom: 28px;
        }

        .timeline-topic {
          color: rgba(246, 236, 94, 1);
        }
      }
    }

    .odd {
      left: 50%;
      &:before {
        content: '';
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border: 2px solid rgba(19, 62, 124, 1);
        background-color: rgba(9, 24, 51, 1);
        border-radius: 14px;
        position: absolute;
        left: -9px;
        z-index: 2;
      }
      
      .timeline-event {
        margin-left: 22px;
        
        .timeline-date {
          padding-left: 22px;
        }

        .timeline-topic {
          padding-left: 18px;
          border-left: 4px solid rgba(3, 174, 243, 1);
        }
      }
    }
  }

  @media all and (max-width: 599px) {
    .timeline {
      &:after {
        left: 14px;
      }

      .timeline-progress {
        left: 14px;
        &:before {
          content: '';
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 2px solid rgba(19, 62, 124, 1);
          background-color: rgba(9, 24, 51, 1);
          border-radius: 14px;
          position: absolute;
          left: -9px;
          z-index: 1;
        }
      
        .timeline-event {
          margin-left: 22px;
          
          .timeline-date {
            padding-left: 22px;
          }

          .timeline-topic {
            padding-left: 18px;
            border-left: 4px solid rgba(3, 174, 243, 1);
          }
        }
      }
    }
  }

  @media all and (min-width: 600px) {
    .timeline {
      &:after {
        left: 50%;
      }

      .even {
        left: 0;
        &:after {
          content: '';
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 2px solid rgba(19, 62, 124, 1);
          background-color: rgba(9, 24, 51, 1);
          border-radius: 14px;
          position: absolute;
          top: 0;
          right: -8px;
          z-index: 1;
        }
        
        .timeline-event {
          margin: 0 22px  0 auto;
          
          .timeline-topic {
            padding-right: 18px;
            border-right: 4px solid rgba(3, 174, 243, 1);
          }
        }
      }
    }
  }
</style>