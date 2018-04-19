var Data = require('Data');
var Func = Data.func;

cc.Class({
  extends: cc.Component,

  properties: {},

  start() {
    Config.hearderNode = this.node;
    cc.game.addPersistRootNode(this.node);
    this.moneyLabel = cc.find('gold/money', this.node).getComponent(cc.Label);
    this.init();
    func: {
      init: this.init;
    }
  },
  setHeardData(data) {
    let RanchMoney = data.Model.RanchMoney;
    let RanchRank = data.Model.RanchRank;
    let moneyLabel = cc.find('gold/money', this.node).getComponent(cc.Label);
    moneyLabel.string = '￥' + RanchMoney;
    //经验值
    this.level = cc.find('Lv/level', this.node).getComponent(cc.Label);
    this.level.string = 'LV.' + data.Model.Grade;
    this.levelProgressBar = cc.find('Lv/lv_bar', this.node).getComponent(cc.ProgressBar);
    this.levelProgressBar.progress = data.Model.ExperienceValue / data.Model.GradeExperienceValue;
  },
  init() {
    Func.GetUserGrade().then(data => {
      if (data.Code === 1) {
        this.setHeardData(data);
      } else {
        Msg.show(data.Message);
      }
    });
  },
  updateMoney() {
    this.moneyLabel.string = data.Model;
  },
  rechargeEvent: function() {
    cc.director.loadScene('recharge');
    this.removePersist();
  },
  gotoUserCenter: function() {
    cc.director.loadScene('userCenter');
    this.removePersist();
  },
  removePersist() {
    cc.game.removePersistRootNode(Config.menuNode);
    cc.game.removePersistRootNode(Config.hearderNode);
  }
  // update (dt) {},
});
