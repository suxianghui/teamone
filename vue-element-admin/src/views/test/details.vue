<template>
  <div class="box">
    <h2 class="tittle">试题详情</h2>
    <div class="messtitle">
      <p class="username">
        <span>出题人: </span>{{ item.username }}</p>
      <p class="message">题目信息</p>
      <div class="text">
        <span class="type_text">{{ item.questions_type_text }}</span>
        <span class="subject_text">{{ item.subject_text }}</span>
        <span class="exam_name">{{ item.exam_name }}</span>
      </div>
      <p class="value">
        机器人归位 在二维平面上，有一个机器人从原点 (0, 0) 开始，给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。 移动顺序由字符串表示。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回
        true。否则，返回 false。 示例 1: 输入: "UD" 输出: true 解释：机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。
        示例 2: 输入: "LL" 输出: false 解释：机器人向左移动两次。它最终位于原点的左侧，距原点有两次 “移动” 的距离。我们返回 false，因为它在移动结束时没有返回原点。 注意：机器人“面朝”的方向无关紧要。
        “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。 请根据题意在横线处填写合适的代码： function check(str){ var U = 0, D =
        0, L = 0, R = 0; for(var i=0; i
      </p>
    </div>
    <div class="Answer">
      <p class="message">答案信息</p>
      <div classs="messagevalue" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        username: '丁善善',
        questions_type_text: '代码补全',
        subject_text: 'javaScript上',
        exam_name: '周考一',
        questions_stem: '机器人归位'
      }

    }
  }
}
</script>

<style scoped>
    .box {
        position: relative;
        width: 100%;
        height: calc(100vh - 84px);
        background: #f0f2f5;
    }

    .tittle {
        padding: 30px 15px;
        font-weight: 200;
    }

    .messtitle {
        width: 1136px;
        background: white;
        border-radius: 10px;
        margin-left: 20px;
        float: left;
        margin-right: 20px;
        padding: 24px;
        margin-bottom: 20px;
    }

    .Answer {
        width: 500px;
        background: white;
        border-radius: 10px;
        float: left;
        padding: 24px;
        margin-bottom: 20px;
    }

    .username {
        font-size: 14px;
    }

    .message {
        font-size: 16px;
    }

    .type_text {
        padding: 3px 6px;
        color: #1890ff;
        background: #e6f7ff;
        border: 1px solid #91d5ff;
        margin-right: 5px;
        font-size: 12px;
    }

    .subject_text {
        padding: 3px 6px;
        color: #2f54eb;
        background: #f0f5ff;
        border: 1px solid #adc6ff;
        font-size: 12px;
    }

    .exam_name {
        padding: 3px 6px;
        color: #fa8c16;
        background: #fff7e6;
        border: 1px solid #ffd591;
        font-size: 12px;
    }
    .value{
        font-size: 14px;
        width: 70%;
        margin:50px;
    }
</style>
