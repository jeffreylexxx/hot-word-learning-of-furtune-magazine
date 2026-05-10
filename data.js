const FORTUNE_LESSONS = [
  {
    date: "2011-08-16",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2011-08/16/content_67220.htm",
    word: {
      term: "headwind",
      cn: "阻力；逆风。商务语境里常指宏观环境、成本或监管变化带来的不利因素。",
      en: "A force or condition that makes progress or growth more difficult.",
      exampleEn: "Higher borrowing costs became a headwind for the company's expansion plan.",
      exampleCn: "借贷成本上升成了公司扩张计划的阻力。"
    },
    phrase: {
      term: "weather the storm",
      cn: "渡过难关；挺过危机，常用于描述企业承受冲击后保持运转。",
      en: "To survive a difficult period without being seriously damaged.",
      exampleEn: "The retailer weathered the storm by cutting inventory and protecting cash flow.",
      exampleCn: "这家零售商通过削减库存、保护现金流挺过了难关。"
    }
  },
  {
    date: "2012-01-11",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2012-01/11/content_86342.htm",
    word: {
      term: "turnaround",
      cn: "转机；扭亏为盈。用于公司业绩、项目状态或市场情绪从坏转好的过程。",
      en: "A marked improvement after a period of weak performance or trouble.",
      exampleEn: "The new CEO promised a turnaround within six quarters.",
      exampleCn: "新任 CEO 承诺在六个季度内实现业务好转。"
    },
    phrase: {
      term: "in the red",
      cn: "亏损；账面为负。常用来形容公司、部门或项目没有盈利。",
      en: "Operating at a loss or showing a negative balance.",
      exampleEn: "The division stayed in the red until subscription revenue improved.",
      exampleCn: "在订阅收入改善之前，该部门一直处于亏损状态。"
    }
  },
  {
    date: "2013-07-17",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2013-07/17/content_165208.htm",
    word: {
      term: "disruption",
      cn: "颠覆；扰动。商业上指新技术或新模式打破既有市场秩序。",
      en: "A change that interrupts an established market, process, or industry pattern.",
      exampleEn: "Streaming created disruption across the traditional media business.",
      exampleCn: "流媒体给传统媒体业务带来了颠覆性影响。"
    },
    phrase: {
      term: "move the needle",
      cn: "产生实质影响；让关键指标明显变化。",
      en: "To make a meaningful difference to a result or metric.",
      exampleEn: "The campaign was popular, but it did not move the needle on sales.",
      exampleCn: "这次活动很受欢迎，但并没有显著拉动销售。"
    }
  },
  {
    date: "2013-11-26",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2013-11/26/content_184511.htm",
    word: {
      term: "overhaul",
      cn: "彻底改革；全面检修。可指组织、系统、流程或战略的大幅调整。",
      en: "A major review and change intended to improve a system or organization.",
      exampleEn: "Management launched an overhaul of the supply chain after repeated delays.",
      exampleCn: "多次延期后，管理层启动了供应链的全面改革。"
    },
    phrase: {
      term: "get back on track",
      cn: "重回正轨；恢复到计划中的节奏。",
      en: "To return to the expected course after delay or trouble.",
      exampleEn: "The project got back on track once the vendor delivered the missing parts.",
      exampleCn: "供应商交付缺失部件后，项目重新回到正轨。"
    }
  },
  {
    date: "2014-10-29",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2014-10/29/content_225052.htm",
    word: {
      term: "windfall",
      cn: "意外之财；意外收益。常指税收、资产出售或市场变化带来的额外收入。",
      en: "An unexpected gain, especially a sudden amount of money.",
      exampleEn: "The patent settlement gave the startup a useful cash windfall.",
      exampleCn: "专利和解给这家初创公司带来了一笔有用的意外现金收入。"
    },
    phrase: {
      term: "cash cow",
      cn: "现金牛；能持续产生稳定现金流的产品或业务。",
      en: "A product or business that reliably generates strong cash flow.",
      exampleEn: "The legacy software became a cash cow that funded new products.",
      exampleCn: "这款老牌软件成了现金牛，为新产品提供资金。"
    }
  },
  {
    date: "2013-05-14",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2013-05/14/content_154979.htm",
    word: {
      term: "traction",
      cn: "市场起势；吸引力。指产品、服务或战略开始获得用户和收入验证。",
      en: "Evidence that an idea, product, or company is gaining acceptance.",
      exampleEn: "The app gained traction after small businesses adopted it for invoicing.",
      exampleCn: "小企业开始用它开发票后，这款应用逐渐打开了市场。"
    },
    phrase: {
      term: "gain ground",
      cn: "取得进展；扩大优势或份额。",
      en: "To make progress or become more successful.",
      exampleEn: "Private brands are gaining ground in the grocery market.",
      exampleCn: "自有品牌正在食品杂货市场取得更多份额。"
    }
  },
  {
    date: "2016-04-28",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2016-04/28/content_261415.htm",
    word: {
      term: "valuation",
      cn: "估值；对公司、资产或项目价值的评估。",
      en: "An estimate of how much a company, asset, or investment is worth.",
      exampleEn: "The funding round lifted the company's valuation above $1 billion.",
      exampleCn: "这轮融资把公司的估值推高到 10 亿美元以上。"
    },
    phrase: {
      term: "raise capital",
      cn: "融资；筹集资本。",
      en: "To obtain money for a business, project, or investment.",
      exampleEn: "The founder plans to raise capital before expanding overseas.",
      exampleCn: "创始人计划在海外扩张前先融资。"
    }
  },
  {
    date: "2013-01-11",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2013-01/11/content_137562.htm?id=mail",
    word: {
      term: "backlash",
      cn: "强烈反弹；负面反应。常见于消费者、员工或监管层对某项决定的不满。",
      en: "A strong negative reaction to a decision, policy, or public statement.",
      exampleEn: "The price increase triggered a backlash from long-time customers.",
      exampleCn: "涨价引发了老客户的强烈反弹。"
    },
    phrase: {
      term: "damage control",
      cn: "损害控制；危机发生后减少负面影响的行动。",
      en: "Actions taken to limit harm after a problem becomes public.",
      exampleEn: "The communications team moved quickly into damage control.",
      exampleCn: "公关团队迅速开始控制损害。"
    }
  },
  {
    date: "2017-09-08",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2017-09/08/content_289892.htm",
    word: {
      term: "compliance",
      cn: "合规；遵守法律、监管要求或内部规则。",
      en: "The act of following laws, regulations, standards, or internal policies.",
      exampleEn: "The bank invested heavily in compliance after the new rules took effect.",
      exampleCn: "新规生效后，这家银行大幅投入合规建设。"
    },
    phrase: {
      term: "play by the rules",
      cn: "按规则办事；遵守既定规范。",
      en: "To act fairly or according to accepted rules.",
      exampleEn: "Global suppliers must play by the rules on labor and safety.",
      exampleCn: "全球供应商必须遵守劳工和安全规则。"
    }
  },
  {
    date: "2008-02-22",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2008-02/22/content_4887.htm",
    word: {
      term: "subprime",
      cn: "次级的；常用于次级贷款，指面向信用较弱借款人的高风险贷款。",
      en: "Relating to loans made to borrowers with weaker credit histories.",
      exampleEn: "Subprime exposure forced several lenders to tighten credit standards.",
      exampleCn: "次贷风险敞口迫使多家贷款机构收紧信贷标准。"
    },
    phrase: {
      term: "credit crunch",
      cn: "信贷紧缩；金融机构减少放贷导致资金难以获得。",
      en: "A period when loans become harder to obtain because credit is restricted.",
      exampleEn: "The credit crunch slowed investment across the property sector.",
      exampleCn: "信贷紧缩拖慢了整个房地产行业的投资。"
    }
  },
  {
    date: "2014-03-17",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2014-03/17/content_197121.htm",
    word: {
      term: "outage",
      cn: "服务中断；停机。用于电力、网络、平台或系统无法正常运行。",
      en: "A period when a service, system, or supply is unavailable.",
      exampleEn: "A cloud outage interrupted online orders for three hours.",
      exampleCn: "云服务中断使在线订单停摆了三个小时。"
    },
    phrase: {
      term: "go dark",
      cn: "突然停止通信或服务；下线。",
      en: "To stop operating, communicating, or being visible.",
      exampleEn: "The website went dark during the product launch.",
      exampleCn: "产品发布期间，网站突然无法访问。"
    }
  },
  {
    date: "2013-10-30",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2013-10/30/content_181787.htm",
    word: {
      term: "scalability",
      cn: "可扩展性；系统或商业模式在需求增长时扩大规模的能力。",
      en: "The ability to grow or handle more work without losing effectiveness.",
      exampleEn: "Investors questioned the scalability of the company's delivery model.",
      exampleCn: "投资者质疑该公司配送模式的可扩展性。"
    },
    phrase: {
      term: "scale up",
      cn: "扩大规模；提升产能或覆盖范围。",
      en: "To increase the size, capacity, or reach of an operation.",
      exampleEn: "The manufacturer needs more suppliers before it can scale up.",
      exampleCn: "这家制造商在扩大规模前需要更多供应商。"
    }
  },
  {
    date: "2018-12-28",
    sourceTitle: "财富中文相关商业英语内容",
    sourceUrl: "https://www.fortunechina.com/first/c/2018-12/28/content_320990.htm",
    word: {
      term: "resilience",
      cn: "韧性；在压力、冲击或变化后恢复并继续运转的能力。",
      en: "The capacity to recover and keep functioning after stress or disruption.",
      exampleEn: "Supply-chain resilience became a board-level priority.",
      exampleCn: "供应链韧性成了董事会层面的优先事项。"
    },
    phrase: {
      term: "bounce back",
      cn: "反弹；恢复元气。",
      en: "To recover after a setback.",
      exampleEn: "The brand bounced back after fixing quality problems.",
      exampleCn: "解决质量问题后，这个品牌恢复了元气。"
    }
  },
  {
    date: "2015-09-06",
    sourceTitle: "商务英语：今日热词",
    sourceUrl: "https://www.fortunechina.com/businessenglish/c/2015-09/06/content_246715.htm",
    word: {
      term: "divestiture",
      cn: "资产剥离；出售子公司、业务线或资产。",
      en: "The sale or disposal of a business unit, asset, or subsidiary.",
      exampleEn: "The divestiture helped the group focus on its core business.",
      exampleCn: "资产剥离帮助集团聚焦核心业务。"
    },
    phrase: {
      term: "spin off",
      cn: "分拆；把业务独立成新公司。",
      en: "To separate part of a company into an independent business.",
      exampleEn: "The board voted to spin off the payments unit.",
      exampleCn: "董事会投票决定分拆支付业务。"
    }
  },
  {
    date: "2000-02-03",
    sourceTitle: "财富中文商业文章",
    sourceUrl: "https://www.fortunechina.com/magazine/c/2000-02/03/content_184.htm",
    word: {
      term: "benchmark",
      cn: "基准；衡量业绩、价格或质量的参照标准。",
      en: "A standard used to compare performance, value, or quality.",
      exampleEn: "The index became a benchmark for technology investors.",
      exampleCn: "该指数成了科技投资者的参考基准。"
    },
    phrase: {
      term: "set the bar",
      cn: "设定标准；树立标杆。",
      en: "To establish the level of quality or performance others are compared with.",
      exampleEn: "The new service set the bar for customer support in the industry.",
      exampleCn: "这项新服务为行业客户支持树立了标杆。"
    }
  }
];
