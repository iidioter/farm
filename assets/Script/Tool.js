var Tool = {
  setBarColor: function(bar, value) {
    var Node = bar;
    if (value < 0.6) {
      Node.color = cc.color("#FF4A4A");
    } else if (value < 0.8) {
      Node.color = cc.color("#FFB70B");
    } else {
      Node.color = cc.color("#74DA72");
    }
  },
  setLabelColor: function(label, value) {
    var node = label.node;
    if (value < 0.6) {
      Node.color = cc.color("#FF4A4A");
    } else if (value < 0.8) {
      Node.color = cc.color("#FFB70B");
    } else {
      Node.color = cc.color("#74DA72");
    }
  },
  //关闭模态
  closeModal: function(node) {
    var action = cc.sequence(cc.fadeOut(0.3), cc.callFunc(node.removeFromParent, node));
    node.runAction(action);
  },
  //范围随机值
  random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

module.exports = {
  Tool: Tool
};
