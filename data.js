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
  },
  {
    date: "2019-02-05",
    sourceTitle: "财富中文网商务英语（2019 年官方词条）",
    sourceUrl: "https://www.fortunechina.com/first/c/2019-02/03/content_325319.htm",
    word: {
      date: "2019-02-03",
      sourceTitle: "商务英语：今日热词——时断时续",
      sourceUrl: "https://www.fortunechina.com/first/c/2019-02/03/content_325319.htm",
      term: "by fits and starts",
      cn: "时断时续。",
      en: "Describing action that is intermittent.",
      exampleEn: "Because unexpected problems kept appearing, our progress on the new project was only accomplished by fits and starts.",
      exampleCn: "由于意想不到的问题不断出现，我们在新项目上的进展时断时续。"
    },
    phrase: {
      date: "2019-02-05",
      sourceTitle: "商务英语：今日热词——靠山",
      sourceUrl: "https://www.fortunechina.com/first/c/2019-02/05/content_325320.htm",
      term: "friends in high places",
      cn: "靠山；身居要职、能够提供帮助的熟人。",
      en: "Acquaintances who can be influential and helpful because of their great importance.",
      exampleEn: "It may be a mistake to assume that you don't have to work hard in your career just because you have friends in high places.",
      exampleCn: "以为有靠山就不用努力工作的想法是错误的。"
    }
  },
  {
    date: "2019-02-09",
    sourceTitle: "财富中文网商务英语（2019 年官方词条）",
    sourceUrl: "https://www.fortunechina.com/first/c/2019-02/07/content_325321.htm",
    word: {
      date: "2019-02-07",
      sourceTitle: "商务英语：今日热词——困难重重",
      sourceUrl: "https://www.fortunechina.com/first/c/2019-02/07/content_325321.htm",
      term: "in the weeds",
      cn: "困难重重；被大量问题或困难压得难以推进。",
      en: "Overwhelmed by numerous problems or difficulties; paralyzed by challenges.",
      exampleEn: "Although it was successful at first, our family business is now in the weeds and we may have to close it soon.",
      exampleCn: "尽管一开始取得了成功，但我的家族企业现在困难重重，可能很快就要关门了。"
    },
    phrase: {
      date: "2019-02-09",
      sourceTitle: "商务英语：今日热词——极度激动",
      sourceUrl: "https://www.fortunechina.com/first/c/2019-02/09/content_325335.htm",
      term: "to be keyed up",
      cn: "极度激动或紧张。",
      en: "To be extremely excited or nervous.",
      exampleEn: "My sister says her first baby will be born this week, and the whole family is keyed up.",
      exampleCn: "我妹妹说，她的第一个孩子将在本周出生，全家大喜过望。"
    }
  },
  {
    date: "2019-02-13",
    sourceTitle: "财富中文网商务英语（2019 年官方词条）",
    sourceUrl: "https://www.fortunechina.com/first/c/2019-02/11/content_325336.htm",
    word: {
      date: "2019-02-11",
      sourceTitle: "商务英语：今日热词——智力有问题",
      sourceUrl: "https://www.fortunechina.com/first/c/2019-02/11/content_325336.htm",
      term: "to be not all there",
      cn: "智力或精神状态有问题；这是非正式且可能冒犯他人的表达，使用时需谨慎。",
      en: "To be mentally incapacitated, either by mental illness, low intelligence, or eccentricity.",
      exampleEn: "I think the old gentleman who constantly talks to himself on the bus is not all there.",
      exampleCn: "我觉得这位总是在公交车上自言自语的老头智力有问题。"
    },
    phrase: {
      date: "2019-02-13",
      sourceTitle: "商务英语：今日热词——宣布重大消息",
      sourceUrl: "https://www.fortunechina.com/first/c/2019-02/13/content_325337.htm",
      term: "to break the news about something",
      cn: "宣布或透露某件重要消息。",
      en: "To reveal something important.",
      exampleEn: "My wife and I are going to have a baby, but we will wait until the weekend to break the news about it to our parents.",
      exampleCn: "我和妻子打算要小孩，但直到周末才会向父母宣布。"
    }
  },
  {
    date: "2024-01-13",
    sourceTitle: "财富中文网官方词条与近年文章词汇摘编",
    sourceUrl: "https://www.fortunechina.com/first/c/2019-02/15/content_325338.htm",
    word: {
      date: "2019-02-15",
      sourceTitle: "商务英语：今日热词——向上爬",
      sourceUrl: "https://www.fortunechina.com/first/c/2019-02/15/content_325338.htm",
      term: "to claw one's way up",
      cn: "不择手段地向上爬；艰难或凶狠地取得高位。",
      en: "To advance to the highest level of something, such as a prestigious position, by ruthless, vicious means.",
      exampleEn: "The unscrupulous young executive often cheated and lied, clawing his way up to leadership of the huge company, laughing at the many people he harmed.",
      exampleCn: "这位不择手段的年轻高管经常撒谎骗人，爬上了这家大公司的领导层，嘲笑很多被他伤害过的人。"
    },
    phrase: {
      date: "2024-01-13",
      sourceTitle: "文章词汇摘编：Netflix创意枯竭，却仍然能够“赢得流媒体大战”",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2024-01/12/content_446300.htm",
      term: "enshittification",
      cn: "平台垃圾化；网络平台逐步牺牲用户和商业客户利益、转而攫取更多自身价值的恶化过程。",
      en: "The gradual degradation of an online platform as it shifts value away from users and business customers to itself.",
      exampleEn: "Customers blamed the platform's rising fees and declining service quality on enshittification.",
      exampleCn: "客户认为平台费用上涨、服务质量下降是平台垃圾化的表现。",
      exampleAdapted: true
    }
  },
  {
    date: "2025-09-30",
    sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
    sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
    word: {
      date: "2025-09-30",
      sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
      term: "petrichor",
      cn: "雨后泥土的清香，尤指温暖干燥一段时间后降雨产生的气味。",
      en: "A pleasant earthy smell produced by rain after a warm, dry period.",
      exampleEn: "The petrichor after the storm drifted through the office windows.",
      exampleCn: "暴雨过后，雨后泥土的清香飘进了办公室。",
      exampleAdapted: true
    },
    phrase: {
      date: "2025-09-30",
      sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
      term: "teraflop",
      cn: "太拉次浮点运算；衡量计算机运算速度的单位。",
      en: "A unit used to measure computer processing speed.",
      exampleEn: "The vendor compared the accelerator's performance in teraflops.",
      exampleCn: "供应商用每秒太拉次浮点运算数比较加速器的性能。",
      exampleAdapted: true
    }
  },
  {
    date: "2025-09-30",
    sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
    sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
    word: {
      date: "2025-09-30",
      sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
      term: "dumbphone",
      cn: "非智能手机；功能较简单、不以应用生态为核心的普通移动电话。",
      en: "A basic mobile phone without the advanced features of a smartphone.",
      exampleEn: "Some employees switched to a dumbphone to reduce digital distractions.",
      exampleCn: "一些员工改用非智能手机，以减少数字干扰。",
      exampleAdapted: true
    },
    phrase: {
      date: "2025-09-30",
      sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
      term: "ghost kitchen",
      cn: "幽灵厨房；没有堂食空间、主要为外卖订单制作餐食的商用厨房。",
      en: "A commercial kitchen that prepares food for delivery without serving dine-in customers.",
      exampleEn: "The restaurant group opened a ghost kitchen to test demand in a new city.",
      exampleCn: "这家餐饮集团开设了一间幽灵厨房，以测试新城市的市场需求。",
      exampleAdapted: true
    }
  },
  {
    date: "2025-09-30",
    sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
    sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
    word: {
      date: "2025-09-30",
      sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
      term: "rizz",
      cn: "魅力；尤指吸引潜在恋爱对象的个人魅力。",
      en: "Charm or the ability to attract a potential romantic partner.",
      exampleEn: "The campaign relied on the founder's rizz to win over younger customers.",
      exampleCn: "这次营销活动借助创始人的个人魅力吸引年轻消费者。",
      exampleAdapted: true
    },
    phrase: {
      date: "2025-09-30",
      sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
      term: "hard pass",
      cn: "坚决拒绝；明确表示完全不感兴趣。",
      en: "A firm and emphatic rejection of an offer, idea, or opportunity.",
      exampleEn: "The board gave the risky acquisition proposal a hard pass.",
      exampleCn: "董事会坚决否决了这项风险很高的收购提议。",
      exampleAdapted: true
    }
  },
  {
    date: "2026-01-10",
    sourceTitle: "财富中文网近年文章词汇摘编",
    sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
    word: {
      date: "2025-09-30",
      sourceTitle: "文章词汇摘编：《韦氏大学词典》新增5000词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm",
      term: "doomscroll",
      cn: "末日滑动；无休止地浏览令人焦虑或沮丧的负面新闻。",
      en: "To continuously scroll through distressing or negative online content.",
      exampleEn: "Managers encouraged staff to stop doomscrolling during market volatility.",
      exampleCn: "市场剧烈波动期间，管理者建议员工不要不停刷负面消息。",
      exampleAdapted: true
    },
    phrase: {
      date: "2026-01-10",
      sourceTitle: "文章词汇摘编：AI视频泛滥，让这个单词成为年度词汇",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2026-01/09/content_471450.htm",
      term: "slop",
      cn: "网络垃圾；通常借助人工智能批量生成的低质量数字内容。",
      en: "Low-quality digital content, often produced in large quantities with artificial intelligence.",
      exampleEn: "The publisher introduced stricter reviews to keep AI slop off its platform.",
      exampleCn: "这家出版平台加强审核，防止低质量的人工智能内容进入平台。",
      exampleAdapted: true
    }
  },
  {
    date: "2026-01-01",
    sourceTitle: "文章词汇摘编：中美AI竞赛：界限日益模糊，下一战关键何在？",
    sourceUrl: "https://www.fortunechina.com/shangye/c/2025-12/31/content_471284.htm",
    word: {
      date: "2026-01-01",
      sourceTitle: "文章词汇摘编：中美AI竞赛：界限日益模糊，下一战关键何在？",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-12/31/content_471284.htm",
      term: "vibe coding",
      cn: "氛围编程；主要通过自然语言提示和反复反馈，让人工智能生成、调整代码的编程方式。",
      en: "An AI-assisted approach to programming through natural-language prompts and iterative feedback.",
      exampleEn: "The team used vibe coding to build a prototype before the planning meeting.",
      exampleCn: "团队通过氛围编程，在规划会议前完成了一个原型。",
      exampleAdapted: true
    },
    phrase: {
      date: "2026-01-01",
      sourceTitle: "文章词汇摘编：中美AI竞赛：界限日益模糊，下一战关键何在？",
      sourceUrl: "https://www.fortunechina.com/shangye/c/2025-12/31/content_471284.htm",
      term: "rage bait",
      cn: "愤怒诱饵；刻意激怒受众、以换取点击和互动的网络内容。",
      en: "Online content deliberately designed to provoke anger and drive engagement.",
      exampleEn: "The brand avoided rage bait even though it generated rapid engagement.",
      exampleCn: "尽管愤怒诱饵能快速带来互动，这个品牌仍避免使用它。",
      exampleAdapted: true
    }
  }
];
