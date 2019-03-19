<template>
	<Z3dModeling v-if="type == '3d-modeling'" />
	<ZAboutMe v-else-if="type == 'about-me'" />
	<ZAcceptRequest v-else-if="type == 'accept-request'" />
	<ZAcceptTerms v-else-if="type == 'accept-terms'" />
	<ZAccount v-else-if="type == 'account'" />
	<ZActiveSupport v-else-if="type == 'active-support'" />
	<ZAddress v-else-if="type == 'address'" />
	<ZAddFile2 v-else-if="type == 'add-file2'" />
	<ZAddNotes v-else-if="type == 'add-notes'" />
	<ZAddToCart v-else-if="type == 'add-to-cart'" />
	<ZAddUser v-else-if="type == 'add-user'" />
	<ZAgreement v-else-if="type == 'agreement'" />
	<ZAircraft v-else-if="type == 'aircraft'" />
	<ZAirport v-else-if="type == 'airport'" />
	<ZAirSupport v-else-if="type == 'air-support'" />
	<ZAlert v-else-if="type == 'alert'" />
	<ZAlgolia v-else-if="type == 'algolia'" />
	<ZAlienScience v-else-if="type == 'alien-science'" />
	<ZAnalysis v-else-if="type == 'analysis'" />
	<ZAnalytics v-else-if="type == 'analytics'" />
	<ZAndroid v-else-if="type == 'android'" />
	<ZApartmentRent v-else-if="type == 'apartment-rent'" />
	<ZAppreciation2 v-else-if="type == 'appreciation-2'" />
	<ZAppInstallation v-else-if="type == 'app-installation'" />
	<ZAroundTheWorld v-else-if="type == 'around-the-world'" />
	<ZArtificialIntelligence v-else-if="type == 'artificial-intelligence'" />
	<ZArtist v-else-if="type == 'artist'" />
	<ZArt v-else-if="type == 'art'" />
	<ZArtLover v-else-if="type == 'art-lover'" />
	<ZAstronaut v-else-if="type == 'astronaut'" />
	<ZAuthentication v-else-if="type == 'authentication'" />
	<ZAutumn2 v-else-if="type == 'autumn-2'" />
	<ZAwards v-else-if="type == 'awards'" />
	<ZADayAtThePark v-else-if="type == 'a-day-at-the-park'" />
	<ZAWholeYear v-else-if="type == 'a-whole-year'" />
	<ZBaby v-else-if="type == 'baby'" />
	<ZBackInTheDay v-else-if="type == 'back-in-the-day'" />
	<ZBackToSchool v-else-if="type == 'back-to-school'" />
	<ZBalloons v-else-if="type == 'balloons'" />
	<ZBarber v-else-if="type == 'barber'" />
	<ZBasketball v-else-if="type == 'basketball'" />
	<ZBeach v-else-if="type == 'beach'" />
	<ZBeerCelebration v-else-if="type == 'beer-celebration'" />
	<ZBeforeDawn v-else-if="type == 'before-dawn'" />
	<ZBeginChat v-else-if="type == 'begin-chat'" />
	<ZBeTheHero v-else-if="type == 'be-the-hero'" />
	<ZBibliophile v-else-if="type == 'bibliophile'" />
	<ZBirthdayCake v-else-if="type == 'birthday-cake'" />
	<ZBitcoin2 v-else-if="type == 'bitcoin2'" />
	<ZBlankCanvas v-else-if="type == 'blank-canvas'" />
	<ZBlogging v-else-if="type == 'blogging'" />
	<ZBlog v-else-if="type == 'blog'" />
	<ZBooking v-else-if="type == 'booking'" />
	<ZBookmarks v-else-if="type == 'bookmarks'" />
	<ZBookLover v-else-if="type == 'book-lover'" />
	<ZBrainstorming v-else-if="type == 'brainstorming'" />
	<ZBroadcast v-else-if="type == 'broadcast'" />
	<ZBrowserStats v-else-if="type == 'browser-stats'" />
	<ZBtcP2p v-else-if="type == 'btc-p2p'" />
	<ZBuddies v-else-if="type == 'buddies'" />
	<ZBuffer v-else-if="type == 'buffer'" />
	<ZBugFixing v-else-if="type == 'bug-fixing'" />
	<ZBuildingBlocks v-else-if="type == 'building-blocks'" />
	<ZBuilding v-else-if="type == 'building'" />
	<ZBusinessman v-else-if="type == 'businessman'" />
	<ZBusinesswoman v-else-if="type == 'businesswoman'" />
	<ZBusinessDeal v-else-if="type == 'business-deal'" />
	<ZBusinessPlan v-else-if="type == 'business-plan'" />
	<ZBusStop v-else-if="type == 'bus-stop'" />
	<ZByMyCar v-else-if="type == 'by-my-car'" />
	<ZCalculator v-else-if="type == 'calculator'" />
	<ZCalendar v-else-if="type == 'calendar'" />
	<ZCalling v-else-if="type == 'calling'" />
	<ZCampfire v-else-if="type == 'campfire'" />
	<ZCamping v-else-if="type == 'camping'" />
	<ZCancel v-else-if="type == 'cancel'" />
	<ZCandidate v-else-if="type == 'candidate'" />
	<ZCareerProgress v-else-if="type == 'career-progress'" />
	<ZCautiousDog v-else-if="type == 'cautious-dog'" />
	<ZCelebration v-else-if="type == 'celebration'" />
	<ZCharts v-else-if="type == 'charts'" />
	<ZChatting v-else-if="type == 'chatting'" />
	<ZChat v-else-if="type == 'chat'" />
	<ZCheckingBoxes v-else-if="type == 'checking-boxes'" />
	<ZChecklist v-else-if="type == 'checklist'" />
	<ZChef v-else-if="type == 'chef'" />
	<ZChildren v-else-if="type == 'children'" />
	<ZChilling v-else-if="type == 'chilling'" />
	<ZChoice v-else-if="type == 'choice'" />
	<ZChoose v-else-if="type == 'choose'" />
	<ZChristmasStocking v-else-if="type == 'christmas-stocking'" />
	<ZChristmasTree v-else-if="type == 'christmas-tree'" />
	<ZCircles v-else-if="type == 'circles'" />
	<ZCityDriver v-else-if="type == 'city-driver'" />
	<ZCityGirl v-else-if="type == 'city-girl'" />
	<ZCloudHosting v-else-if="type == 'cloud-hosting'" />
	<ZCloudSync v-else-if="type == 'cloud-sync'" />
	<ZCoWorkers v-else-if="type == 'co-workers'" />
	<ZCoWorking v-else-if="type == 'co-working'" />
	<ZCodeTyping v-else-if="type == 'code-typing'" />
	<ZCoding v-else-if="type == 'coding'" />
	<ZCoffeeBreak v-else-if="type == 'coffee-break'" />
	<ZCollaboration2 v-else-if="type == 'collaboration2'" />
	<ZCollecting v-else-if="type == 'collecting'" />
	<ZCollection v-else-if="type == 'collection'" />
	<ZCommunity v-else-if="type == 'community'" />
	<ZCompleted v-else-if="type == 'completed'" />
	<ZComposeMusic v-else-if="type == 'compose-music'" />
	<ZConferenceSpeaker v-else-if="type == 'conference-speaker'" />
	<ZConference v-else-if="type == 'conference'" />
	<ZConfirmation v-else-if="type == 'confirmation'" />
	<ZConfirmed v-else-if="type == 'confirmed'" />
	<ZConnected v-else-if="type == 'connected'" />
	<ZConnectedWorld v-else-if="type == 'connected-world'" />
	<ZConnectingTeams3 v-else-if="type == 'connecting-teams3'" />
	<ZContactUs v-else-if="type == 'contact-us'" />
	<ZContainerShip v-else-if="type == 'container-ship'" />
	<ZContemplating v-else-if="type == 'contemplating'" />
	<ZContentCreator v-else-if="type == 'content-creator'" />
	<ZContent v-else-if="type == 'content'" />
	<ZContrast v-else-if="type == 'contrast'" />
	<ZControlPanel1 v-else-if="type == 'control-panel1'" />
	<ZConversation v-else-if="type == 'conversation'" />
	<ZConvert v-else-if="type == 'convert'" />
	<ZCountrySide v-else-if="type == 'country-side'" />
	<ZCouple v-else-if="type == 'couple'" />
	<ZCreate v-else-if="type == 'create'" />
	<ZCreationProcess v-else-if="type == 'creation-process'" />
	<ZCreativeThinking v-else-if="type == 'creative-thinking'" />
	<ZCreativeWoman v-else-if="type == 'creative-woman'" />
	<ZCreativity v-else-if="type == 'creativity'" />
	<ZCreditCard v-else-if="type == 'credit-card'" />
	<ZCreditCardPayment v-else-if="type == 'credit-card-payment'" />
	<ZCryptoFlowers v-else-if="type == 'crypto-flowers'" />
	<ZCustomerSurvey v-else-if="type == 'customer-survey'" />
	<ZDarkAlley v-else-if="type == 'dark-alley'" />
	<ZDarkAnalytics v-else-if="type == 'dark-analytics'" />
	<ZDashboard v-else-if="type == 'dashboard'" />
	<ZDataPoints v-else-if="type == 'data-points'" />
	<ZDataReport v-else-if="type == 'data-report'" />
	<ZDataTrends v-else-if="type == 'data-trends'" />
	<ZData v-else-if="type == 'data'" />
	<ZDeliveries v-else-if="type == 'deliveries'" />
	<ZDeparting v-else-if="type == 'departing'" />
	<ZDepi v-else-if="type == 'depi'" />
	<ZDesignerGirl v-else-if="type == 'designer-girl'" />
	<ZDesigner v-else-if="type == 'designer'" />
	<ZDesignerLife v-else-if="type == 'designer-life'" />
	<ZDesignCommunity v-else-if="type == 'design-community'" />
	<ZDesignProcess v-else-if="type == 'design-process'" />
	<ZDesignThinking v-else-if="type == 'design-thinking'" />
	<ZDesignTools v-else-if="type == 'design-tools'" />
	<ZDestination v-else-if="type == 'destination'" />
	<ZDeveloperActivity v-else-if="type == 'developer-activity'" />
	<ZDevelopment v-else-if="type == 'development'" />
	<ZDevices v-else-if="type == 'devices'" />
	<ZDigitalNomad v-else-if="type == 'digital-nomad'" />
	<ZDirections v-else-if="type == 'directions'" />
	<ZDiscount v-else-if="type == 'discount'" />
	<ZDoctors v-else-if="type == 'doctors'" />
	<ZDoctor v-else-if="type == 'doctor'" />
	<ZDogWalking v-else-if="type == 'dog-walking'" />
	<ZDollPlay v-else-if="type == 'doll-play'" />
	<ZDomainNames v-else-if="type == 'domain-names'" />
	<ZDownload v-else-if="type == 'download'" />
	<ZDreamer v-else-if="type == 'dreamer'" />
	<ZDroneDelivery v-else-if="type == 'drone-delivery'" />
	<ZDroneRace v-else-if="type == 'drone-race'" />
	<ZDuaLipa v-else-if="type == 'dua-lipa'" />
	<ZEasterEggHunt v-else-if="type == 'easter-egg-hunt'" />
	<ZEatingTogether v-else-if="type == 'eating-together'" />
	<ZElectricCar v-else-if="type == 'electric-car'" />
	<ZEmails v-else-if="type == 'emails'" />
	<ZEmailCampaign v-else-if="type == 'email-campaign'" />
	<ZEmailCapture v-else-if="type == 'email-capture'" />
	<ZEmpty v-else-if="type == 'empty'" />
	<ZEnvelope v-else-if="type == 'envelope'" />
	<ZEnvironment v-else-if="type == 'environment'" />
	<ZEthereumDesire v-else-if="type == 'ethereum-desire'" />
	<ZEthereum v-else-if="type == 'ethereum'" />
	<ZEvents v-else-if="type == 'events'" />
	<ZEverydayDesign v-else-if="type == 'everyday-design'" />
	<ZExams v-else-if="type == 'exams'" />
	<ZExperts3 v-else-if="type == 'experts3'" />
	<ZExploring v-else-if="type == 'exploring'" />
	<ZFallIsComing v-else-if="type == 'fall-is-coming'" />
	<ZFans v-else-if="type == 'fans'" />
	<ZFashionBlogging v-else-if="type == 'fashion-blogging'" />
	<ZFastCar v-else-if="type == 'fast-car'" />
	<ZFastLoading v-else-if="type == 'fast-loading'" />
	<ZFatherhood v-else-if="type == 'fatherhood'" />
	<ZFeaturesOverview v-else-if="type == 'features-overview'" />
	<ZFeelingBlue v-else-if="type == 'feeling-blue'" />
	<ZFestivities v-else-if="type == 'festivities'" />
	<ZFiles1 v-else-if="type == 'files1'" />
	<ZFiles v-else-if="type == 'files'" />
	<ZFilesSent v-else-if="type == 'files-sent'" />
	<ZFileBundle v-else-if="type == 'file-bundle'" />
	<ZFileSearching v-else-if="type == 'file-searching'" />
	<ZFilingSystem v-else-if="type == 'filing-system'" />
	<ZFilter v-else-if="type == 'filter'" />
	<ZFinance v-else-if="type == 'finance'" />
	<ZFinancialData v-else-if="type == 'financial-data'" />
	<ZFingerprint v-else-if="type == 'fingerprint'" />
	<ZFinishLineKaterinaLimpitsouni v-else-if="type == 'finish-line-katerina-limpitsouni'" />
	<ZFireworks v-else-if="type == 'fireworks'" />
	<ZFirmware v-else-if="type == 'firmware'" />
	<ZFishing v-else-if="type == 'fishing'" />
	<ZFishBowl v-else-if="type == 'fish-bowl'" />
	<ZFitnessTracker v-else-if="type == 'fitness-tracker'" />
	<ZFloating v-else-if="type == 'floating'" />
	<ZFocus v-else-if="type == 'focus'" />
	<ZFolder v-else-if="type == 'folder'" />
	<ZFollowers v-else-if="type == 'followers'" />
	<ZFollowing v-else-if="type == 'following'" />
	<ZFollowMeDrone v-else-if="type == 'follow-me-drone'" />
	<ZForever v-else-if="type == 'forever'" />
	<ZForSale v-else-if="type == 'for-sale'" />
	<ZFreelancer v-else-if="type == 'freelancer'" />
	<ZFriendship v-else-if="type == 'friendship'" />
	<ZFrozenFigure v-else-if="type == 'frozen-figure'" />
	<ZGameDay v-else-if="type == 'game-day'" />
	<ZGaming v-else-if="type == 'gaming'" />
	<ZGardening v-else-if="type == 'gardening'" />
	<ZGdpr v-else-if="type == 'gdpr'" />
	<ZGettingCoffee v-else-if="type == 'getting-coffee'" />
	<ZGift1 v-else-if="type == 'gift1'" />
	<ZGifts v-else-if="type == 'gifts'" />
	<ZGiftCard v-else-if="type == 'gift-card'" />
	<ZGirlJustWannaHaveFun v-else-if="type == 'girl-just-wanna-have-fun'" />
	<ZGoal v-else-if="type == 'goal'" />
	<ZGoingUp v-else-if="type == 'going-up'" />
	<ZGoldenGateBridge v-else-if="type == 'golden-gate-bridge'" />
	<ZGoodDoggy v-else-if="type == 'good-doggy'" />
	<ZGrades v-else-if="type == 'grades'" />
	<ZGradma v-else-if="type == 'gradma'" />
	<ZGraduation v-else-if="type == 'graduation'" />
	<ZGroupChat v-else-if="type == 'group-chat'" />
	<ZGroupSelfie v-else-if="type == 'group-selfie'" />
	<ZGrowing v-else-if="type == 'growing'" />
	<ZGrowthAnalytics v-else-if="type == 'growth-analytics'" />
	<ZHamburger v-else-if="type == 'hamburger'" />
	<ZHangOut v-else-if="type == 'hang-out'" />
	<ZHappy2019 v-else-if="type == 'happy-2019'" />
	<ZHappyBirthday v-else-if="type == 'happy-birthday'" />
	<ZHappyWomenDay v-else-if="type == 'happy-women-day'" />
	<ZHavingFun v-else-if="type == 'having-fun'" />
	<ZHealthyHabit v-else-if="type == 'healthy-habit'" />
	<ZHeartbroken v-else-if="type == 'heartbroken'" />
	<ZHello v-else-if="type == 'hello'" />
	<ZHighFive v-else-if="type == 'high-five'" />
	<ZHiking v-else-if="type == 'hiking'" />
	<ZHire v-else-if="type == 'hire'" />
	<ZHiring v-else-if="type == 'hiring'" />
	<ZHomeRun v-else-if="type == 'home-run'" />
	<ZHorrorMovie v-else-if="type == 'horror-movie'" />
	<ZHouses3 v-else-if="type == 'houses3'" />
	<ZHouseSearching v-else-if="type == 'house-searching'" />
	<ZImages v-else-if="type == 'images'" />
	<ZImagePost v-else-if="type == 'image-post'" />
	<ZImageUpload v-else-if="type == 'image-upload'" />
	<ZInboxCleanup v-else-if="type == 'inbox-cleanup'" />
	<ZInfluencer v-else-if="type == 'influencer'" />
	<ZInstantSupport v-else-if="type == 'instant-support'" />
	<ZInstructionManual v-else-if="type == 'instruction-manual'" />
	<ZInteractionDesign v-else-if="type == 'interaction-design'" />
	<ZInternetOnTheGo v-else-if="type == 'internet-on-the-go'" />
	<ZInterview v-else-if="type == 'interview'" />
	<ZIntoTheNight v-else-if="type == 'into-the-night'" />
	<ZInvesting v-else-if="type == 'investing'" />
	<ZInvite v-else-if="type == 'invite'" />
	<ZInLove v-else-if="type == 'in-love'" />
	<ZInProgress v-else-if="type == 'in-progress'" />
	<ZInSync v-else-if="type == 'in-sync'" />
	<ZInTheOffice v-else-if="type == 'in-the-office'" />
	<ZInThePool v-else-if="type == 'in-the-pool'" />
	<ZInThought v-else-if="type == 'in-thought'" />
	<ZICanFly v-else-if="type == 'i-can-fly'" />
	<ZJapan v-else-if="type == 'japan'" />
	<ZJasonMask v-else-if="type == 'jason-mask'" />
	<ZJavascriptFrameworks v-else-if="type == 'javascript-frameworks'" />
	<ZJobHunt v-else-if="type == 'job-hunt'" />
	<ZJogging v-else-if="type == 'jogging'" />
	<ZJourney v-else-if="type == 'journey'" />
	<ZJoyride v-else-if="type == 'joyride'" />
	<ZJudgeKaterinaLimpitsouni v-else-if="type == 'judge-katerina-limpitsouni'" />
	<ZKnowledge v-else-if="type == 'knowledge'" />
	<ZLaravelAndVue v-else-if="type == 'laravel-and-vue'" />
	<ZLateAtNight v-else-if="type == 'late-at-night'" />
	<ZLaunching v-else-if="type == 'launching'" />
	<ZLighthouse v-else-if="type == 'lighthouse'" />
	<ZLiveCollaboration v-else-if="type == 'live-collaboration'" />
	<ZLoading v-else-if="type == 'loading'" />
	<ZLogin v-else-if="type == 'login'" />
	<ZLogistics v-else-if="type == 'logistics'" />
	<ZLost v-else-if="type == 'lost'" />
	<ZLoveIsInTheAir v-else-if="type == 'love-is-in-the-air'" />
	<ZLove v-else-if="type == 'love'" />
	<ZMail1 v-else-if="type == 'mail1'" />
	<ZMail2 v-else-if="type == 'mail-2'" />
	<ZMailBox v-else-if="type == 'mail-box'" />
	<ZMail v-else-if="type == 'mail'" />
	<ZMaintenance v-else-if="type == 'maintenance'" />
	<ZMakerLaunch v-else-if="type == 'maker-launch'" />
	<ZMakeupArtist v-else-if="type == 'makeup-artist'" />
	<ZMakeItRain v-else-if="type == 'make-it-rain'" />
	<ZMakingArt v-else-if="type == 'making-art'" />
	<ZMan v-else-if="type == 'man'" />
	<ZMap v-else-if="type == 'map'" />
	<ZMapLight v-else-if="type == 'map-light'" />
	<ZMarilyn v-else-if="type == 'marilyn'" />
	<ZMarketing v-else-if="type == 'marketing'" />
	<ZMayTheForce v-else-if="type == 'may-the-force'" />
	<ZMediaPlayer v-else-if="type == 'media-player'" />
	<ZMedicine v-else-if="type == 'medicine'" />
	<ZMeditating v-else-if="type == 'meditating'" />
	<ZMeditation v-else-if="type == 'meditation'" />
	<ZMeeting v-else-if="type == 'meeting'" />
	<ZMemoryStorage v-else-if="type == 'memory-storage'" />
	<ZMessages1 v-else-if="type == 'messages1'" />
	<ZMessageSent v-else-if="type == 'message-sent'" />
	<ZMessagingFun v-else-if="type == 'messaging-fun'" />
	<ZMessaging v-else-if="type == 'messaging'" />
	<ZMessenger v-else-if="type == 'messenger'" />
	<ZMetrics v-else-if="type == 'metrics'" />
	<ZMillennialGirl v-else-if="type == 'millennial-girl'" />
	<ZMindfulness v-else-if="type == 'mindfulness'" />
	<ZMindMap v-else-if="type == 'mind-map'" />
	<ZMintTea v-else-if="type == 'mint-tea'" />
	<ZMissedChances v-else-if="type == 'missed-chances'" />
	<ZMissionImpossible v-else-if="type == 'mission-impossible'" />
	<ZMobileApps v-else-if="type == 'mobile-apps'" />
	<ZMobileBrowsers v-else-if="type == 'mobile-browsers'" />
	<ZMobileLife v-else-if="type == 'mobile-life'" />
	<ZMobileMarketing v-else-if="type == 'mobile-marketing'" />
	<ZMobilePayments v-else-if="type == 'mobile-payments'" />
	<ZMobile v-else-if="type == 'mobile'" />
	<ZMobileTesting v-else-if="type == 'mobile-testing'" />
	<ZModernLife v-else-if="type == 'modern-life'" />
	<ZModernWoman v-else-if="type == 'modern-woman'" />
	<ZMomentToRemember v-else-if="type == 'moment-to-remember'" />
	<ZMonitor v-else-if="type == 'monitor'" />
	<ZMoreMusic v-else-if="type == 'more-music'" />
	<ZMorningEssentials v-else-if="type == 'morning-essentials'" />
	<ZMotherhood v-else-if="type == 'motherhood'" />
	<ZMovieNight v-else-if="type == 'movie-night'" />
	<ZMovingForward v-else-if="type == 'moving-forward'" />
	<ZMultitasking v-else-if="type == 'multitasking'" />
	<ZMusic v-else-if="type == 'music'" />
	<ZMyPassword v-else-if="type == 'my-password'" />
	<ZNavigation v-else-if="type == 'navigation'" />
	<ZNewsletter v-else-if="type == 'newsletter'" />
	<ZNews v-else-if="type == 'news'" />
	<ZNewMessage v-else-if="type == 'new-message'" />
	<ZNightCalls v-else-if="type == 'night-calls'" />
	<ZNinja v-else-if="type == 'ninja'" />
	<ZNotebook v-else-if="type == 'notebook'" />
	<ZNotes1 v-else-if="type == 'notes1'" />
	<ZNoteList v-else-if="type == 'note-list'" />
	<ZNotify v-else-if="type == 'notify'" />
	<ZNoData v-else-if="type == 'no-data'" />
	<ZOffRoad v-else-if="type == 'off-road'" />
	<ZOldDay v-else-if="type == 'old-day'" />
	<ZOnboarding v-else-if="type == 'onboarding'" />
	<ZOnline v-else-if="type == 'online'" />
	<ZOnlineFriends v-else-if="type == 'online-friends'" />
	<ZOnlinePage v-else-if="type == 'online-page'" />
	<ZOnlineShopping v-else-if="type == 'online-shopping'" />
	<ZOnlineWishes v-else-if="type == 'online-wishes'" />
	<ZOnlineWorld v-else-if="type == 'online-world'" />
	<ZOnTheOffice v-else-if="type == 'on-the-office'" />
	<ZOnTheWay v-else-if="type == 'on-the-way'" />
	<ZOpened v-else-if="type == 'opened'" />
	<ZOpenSource v-else-if="type == 'open-source'" />
	<ZOperatingSystem v-else-if="type == 'operating-system'" />
	<ZOrderConfirmed v-else-if="type == 'order-confirmed'" />
	<ZOrdinaryDay v-else-if="type == 'ordinary-day'" />
	<ZOrganizePhotos v-else-if="type == 'organize-photos'" />
	<ZOrganizeResume v-else-if="type == 'organize-resume'" />
	<ZOrganizingProjects1 v-else-if="type == 'organizing-projects1'" />
	<ZOuterSpace v-else-if="type == 'outer-space'" />
	<ZPageNotFound v-else-if="type == 'page-not-found'" />
	<ZPairProgramming v-else-if="type == 'pair-programming'" />
	<ZPalette v-else-if="type == 'palette'" />
	<ZPassingBy v-else-if="type == 'passing-by'" />
	<ZPayments v-else-if="type == 'payments'" />
	<ZPcsocial v-else-if="type == 'pcsocial'" />
	<ZPedestrianCrossing v-else-if="type == 'pedestrian-crossing'" />
	<ZPen v-else-if="type == 'pen'" />
	<ZPeopleSearch v-else-if="type == 'people-search'" />
	<ZPersonalization v-else-if="type == 'personalization'" />
	<ZPersonalData v-else-if="type == 'personal-data'" />
	<ZPersonalNotes v-else-if="type == 'personal-notes'" />
	<ZPersonalSettings v-else-if="type == 'personal-settings'" />
	<ZPersonalSite v-else-if="type == 'personal-site'" />
	<ZPersonalTrainer v-else-if="type == 'personal-trainer'" />
	<ZPhotocopy v-else-if="type == 'photocopy'" />
	<ZPhotos v-else-if="type == 'photos'" />
	<ZPhoto v-else-if="type == 'photo'" />
	<ZPhotoSharing1 v-else-if="type == 'photo-sharing-1'" />
	<ZPieChart v-else-if="type == 'pie-chart'" />
	<ZPilates v-else-if="type == 'pilates'" />
	<ZPizzaSharing v-else-if="type == 'pizza-sharing'" />
	<ZPlainCreditCard v-else-if="type == 'plain-credit-card'" />
	<ZPlayfulCat v-else-if="type == 'playful-cat'" />
	<ZPodcastAudience v-else-if="type == 'podcast-audience'" />
	<ZPodcast v-else-if="type == 'podcast'" />
	<ZPortfolio v-else-if="type == 'portfolio'" />
	<ZPost2 v-else-if="type == 'post2'" />
	<ZPostingPhoto v-else-if="type == 'posting-photo'" />
	<ZPosts v-else-if="type == 'posts'" />
	<ZPostOnline v-else-if="type == 'post-online'" />
	<ZPowerful v-else-if="type == 'powerful'" />
	<ZPreferences v-else-if="type == 'preferences'" />
	<ZPresentation1 v-else-if="type == 'presentation1'" />
	<ZPressPlay v-else-if="type == 'press-play'" />
	<ZPrintingInvoices v-else-if="type == 'printing-invoices'" />
	<ZProblemSolving v-else-if="type == 'problem-solving'" />
	<ZProcessing v-else-if="type == 'processing'" />
	<ZProductHunt v-else-if="type == 'product-hunt'" />
	<ZProductTeardown v-else-if="type == 'product-teardown'" />
	<ZProductTour v-else-if="type == 'product-tour'" />
	<ZProfile v-else-if="type == 'profile'" />
	<ZProfileData v-else-if="type == 'profile-data'" />
	<ZProfilePic v-else-if="type == 'profile-pic'" />
	<ZProgrammer v-else-if="type == 'programmer'" />
	<ZProgramming v-else-if="type == 'programming'" />
	<ZProjections v-else-if="type == 'projections'" />
	<ZPrototypingProcess v-else-if="type == 'prototyping-process'" />
	<ZQaEngineers v-else-if="type == 'qa-engineers'" />
	<ZQuestions v-else-if="type == 'questions'" />
	<ZQueue v-else-if="type == 'queue'" />
	<ZQuittingTime v-else-if="type == 'quitting-time'" />
	<ZReact v-else-if="type == 'react'" />
	<ZReadingList v-else-if="type == 'reading-list'" />
	<ZRealTimeSync v-else-if="type == 'real-time-sync'" />
	<ZRecording v-else-if="type == 'recording'" />
	<ZRefreshing v-else-if="type == 'refreshing'" />
	<ZRelaxation1 v-else-if="type == 'relaxation-1'" />
	<ZRelaxingAtHome v-else-if="type == 'relaxing-at-home'" />
	<ZReport v-else-if="type == 'report'" />
	<ZResponsive v-else-if="type == 'responsive'" />
	<ZResume v-else-if="type == 'resume'" />
	<ZResumeFolder2 v-else-if="type == 'resume-folder-2'" />
	<ZRevenue v-else-if="type == 'revenue'" />
	<ZRideABicycle v-else-if="type == 'ride-a-bicycle'" />
	<ZRising v-else-if="type == 'rising'" />
	<ZRobotics v-else-if="type == 'robotics'" />
	<ZRomanticGetaway v-else-if="type == 'romantic-getaway'" />
	<ZRunningWild v-else-if="type == 'running-wild'" />
	<ZSafe v-else-if="type == 'safe'" />
	<ZSantaClaus v-else-if="type == 'santa-claus'" />
	<ZSavings v-else-if="type == 'savings'" />
	<ZSchedule v-else-if="type == 'schedule'" />
	<ZScience v-else-if="type == 'science'" />
	<ZScooter v-else-if="type == 'scooter'" />
	<ZScrumBoard v-else-if="type == 'scrum-board'" />
	<ZSculpting v-else-if="type == 'sculpting'" />
	<ZSearch v-else-if="type == 'search'" />
	<ZSearchEngines v-else-if="type == 'search-engines'" />
	<ZSecureData v-else-if="type == 'secure-data'" />
	<ZSecureServer v-else-if="type == 'secure-server'" />
	<ZSecurity v-else-if="type == 'security'" />
	<ZSecurityOn v-else-if="type == 'security-on'" />
	<ZSegmentation v-else-if="type == 'segmentation'" />
	<ZSegment v-else-if="type == 'segment'" />
	<ZSelect v-else-if="type == 'select'" />
	<ZSelfie1 v-else-if="type == 'selfie1'" />
	<ZSelfieTime v-else-if="type == 'selfie-time'" />
	<ZServerDown v-else-if="type == 'server-down'" />
	<ZServer v-else-if="type == 'server'" />
	<ZServerStatus v-else-if="type == 'server-status'" />
	<ZSetupAnalytics v-else-if="type == 'setup-analytics'" />
	<ZSetup v-else-if="type == 'setup'" />
	<ZSetupWizard v-else-if="type == 'setup-wizard'" />
	<ZShopping v-else-if="type == 'shopping'" />
	<ZSiteStats v-else-if="type == 'site-stats'" />
	<ZSkateboarding v-else-if="type == 'skateboarding'" />
	<ZSleepAnalysis v-else-if="type == 'sleep-analysis'" />
	<ZSmartHome v-else-if="type == 'smart-home'" />
	<ZSmileyFace v-else-if="type == 'smiley-face'" />
	<ZSnowman1 v-else-if="type == 'snowman-1'" />
	<ZSocialDashboard v-else-if="type == 'social-dashboard'" />
	<ZSocialGrowth v-else-if="type == 'social-growth'" />
	<ZSocialIdeas v-else-if="type == 'social-ideas'" />
	<ZSocialLife v-else-if="type == 'social-life'" />
	<ZSocialNetworking v-else-if="type == 'social-networking'" />
	<ZSocialShare v-else-if="type == 'social-share'" />
	<ZSocialStrategy v-else-if="type == 'social-strategy'" />
	<ZSocialTree1 v-else-if="type == 'social-tree-1'" />
	<ZSocialUpdate v-else-if="type == 'social-update'" />
	<ZSoftwareEngineer v-else-if="type == 'software-engineer'" />
	<ZSpecs v-else-if="type == 'specs'" />
	<ZSpreadsheets v-else-if="type == 'spreadsheets'" />
	<ZStabilityBall v-else-if="type == 'stability-ball'" />
	<ZStartled v-else-if="type == 'startled'" />
	<ZStartman1 v-else-if="type == 'startman1'" />
	<ZStartupLife v-else-if="type == 'startup-life'" />
	<ZStaticAssets v-else-if="type == 'static-assets'" />
	<ZStatistics v-else-if="type == 'statistics'" />
	<ZStatusUpdate v-else-if="type == 'status-update'" />
	<ZStayingIn v-else-if="type == 'staying-in'" />
	<ZStepToTheSun v-else-if="type == 'step-to-the-sun'" />
	<ZStreetFood v-else-if="type == 'street-food'" />
	<ZStripePayments v-else-if="type == 'stripe-payments'" />
	<ZStudying v-else-if="type == 'studying'" />
	<ZSubway v-else-if="type == 'subway'" />
	<ZSuccessfulPurchase v-else-if="type == 'successful-purchase'" />
	<ZSunnyDay v-else-if="type == 'sunny-day'" />
	<ZSuperhero v-else-if="type == 'superhero'" />
	<ZSuperThankYou v-else-if="type == 'super-thank-you'" />
	<ZSuperWoman v-else-if="type == 'super-woman'" />
	<ZSurfer v-else-if="type == 'surfer'" />
	<ZSwipeProfiles1 v-else-if="type == 'swipe-profiles1'" />
	<ZSync4 v-else-if="type == 'sync4'" />
	<ZSynchronize v-else-if="type == 'synchronize'" />
	<ZTabs v-else-if="type == 'tabs'" />
	<ZTaken v-else-if="type == 'taken'" />
	<ZTakingNotes v-else-if="type == 'taking-notes'" />
	<ZTarget v-else-if="type == 'target'" />
	<ZTask v-else-if="type == 'task'" />
	<ZTasting v-else-if="type == 'tasting'" />
	<ZTeacher v-else-if="type == 'teacher'" />
	<ZTeaching v-else-if="type == 'teaching'" />
	<ZTeam v-else-if="type == 'team'" />
	<ZTeamPage v-else-if="type == 'team-page'" />
	<ZTeamSpirit v-else-if="type == 'team-spirit'" />
	<ZTeamWork v-else-if="type == 'team-work'" />
	<ZTeddyBear v-else-if="type == 'teddy-bear'" />
	<ZTexting v-else-if="type == 'texting'" />
	<ZThoughts v-else-if="type == 'thoughts'" />
	<ZThroughTheDesert v-else-if="type == 'through-the-desert'" />
	<ZTimeline v-else-if="type == 'timeline'" />
	<ZTimeManagement v-else-if="type == 'time-management'" />
	<ZTogether v-else-if="type == 'together'" />
	<ZToyCar v-else-if="type == 'toy-car'" />
	<ZToDoList v-else-if="type == 'to-do-list'" />
	<ZToDo v-else-if="type == 'to-do'" />
	<ZToTheStars v-else-if="type == 'to-the-stars'" />
	<ZTrackAndField v-else-if="type == 'track-and-field'" />
	<ZTransferFiles v-else-if="type == 'transfer-files'" />
	<ZTravelers v-else-if="type == 'travelers'" />
	<ZTraveling v-else-if="type == 'traveling'" />
	<ZTravelBooking v-else-if="type == 'travel-booking'" />
	<ZTreasure v-else-if="type == 'treasure'" />
	<ZTrip v-else-if="type == 'trip'" />
	<ZTrueFriends v-else-if="type == 'true-friends'" />
	<ZTweetstorm v-else-if="type == 'tweetstorm'" />
	<ZTypewriter v-else-if="type == 'typewriter'" />
	<ZTyping v-else-if="type == 'typing'" />
	<ZUnboxing v-else-if="type == 'unboxing'" />
	<ZUnderConstruction v-else-if="type == 'under-construction'" />
	<ZUpdate v-else-if="type == 'update'" />
	<ZUpgrade v-else-if="type == 'upgrade'" />
	<ZUploading v-else-if="type == 'uploading'" />
	<ZUpload v-else-if="type == 'upload'" />
	<ZUploadImage v-else-if="type == 'upload-image'" />
	<ZUpvote v-else-if="type == 'upvote'" />
	<ZUsabilityTesting v-else-if="type == 'usability-testing'" />
	<ZUserFlow v-else-if="type == 'user-flow'" />
	<ZVault v-else-if="type == 'vault'" />
	<ZVehicleSale v-else-if="type == 'vehicle-sale'" />
	<ZVersionControl v-else-if="type == 'version-control'" />
	<ZVideographer v-else-if="type == 'videographer'" />
	<ZVideoCall v-else-if="type == 'video-call'" />
	<ZVirtualReality v-else-if="type == 'virtual-reality'" />
	<ZVisualData v-else-if="type == 'visual-data'" />
	<ZVoiceControl v-else-if="type == 'voice-control'" />
	<ZVrChat v-else-if="type == 'vr-chat'" />
	<ZWalkInTheCity v-else-if="type == 'walk-in-the-city'" />
	<ZWallet v-else-if="type == 'wallet'" />
	<ZWallPost v-else-if="type == 'wall-post'" />
	<ZWarning v-else-if="type == 'warning'" />
	<ZWeatherApp v-else-if="type == 'weather-app'" />
	<ZWeather v-else-if="type == 'weather'" />
	<ZWebsiteSetup v-else-if="type == 'website-setup'" />
	<ZWebDevices v-else-if="type == 'web-devices'" />
	<ZWedding v-else-if="type == 'wedding'" />
	<ZWelcome v-else-if="type == 'welcome'" />
	<ZWindows v-else-if="type == 'windows'" />
	<ZWindowShopping v-else-if="type == 'window-shopping'" />
	<ZWindTurbine v-else-if="type == 'wind-turbine'" />
	<ZWinners v-else-if="type == 'winners'" />
	<ZWinterDesigner v-else-if="type == 'winter-designer'" />
	<ZWinterOlympics v-else-if="type == 'winter-olympics'" />
	<ZWireframing v-else-if="type == 'wireframing'" />
	<ZWishes v-else-if="type == 'wishes'" />
	<ZWishlist v-else-if="type == 'wishlist'" />
	<ZWitch v-else-if="type == 'witch'" />
	<ZWoman v-else-if="type == 'woman'" />
	<ZWomenDay v-else-if="type == 'women-day'" />
	<ZWordpress v-else-if="type == 'wordpress'" />
	<ZWordOfMouth v-else-if="type == 'word-of-mouth'" />
	<ZWorking v-else-if="type == 'working'" />
	<ZWorkingLate v-else-if="type == 'working-late'" />
	<ZWorkingRemotely v-else-if="type == 'working-remotely'" />
	<ZWorkout v-else-if="type == 'workout'" />
	<ZWorkChat v-else-if="type == 'work-chat'" />
	<ZWorkTime v-else-if="type == 'work-time'" />
	<ZWorld v-else-if="type == 'world'" />
	<ZXmasSurprise v-else-if="type == 'xmas-surprise'" />
	<ZYacht v-else-if="type == 'yacht'" />
	<ZYoungAndHappy v-else-if="type == 'young-and-happy'" />
	<ZYoutubeTutorial v-else-if="type == 'youtube-tutorial'" />
</template>

<script>
import Z3dModeling from './illustrations/Z3dModeling.vue';
import ZAboutMe from './illustrations/ZAboutMe.vue';
import ZAcceptRequest from './illustrations/ZAcceptRequest.vue';
import ZAcceptTerms from './illustrations/ZAcceptTerms.vue';
import ZAccount from './illustrations/ZAccount.vue';
import ZActiveSupport from './illustrations/ZActiveSupport.vue';
import ZAddress from './illustrations/ZAddress.vue';
import ZAddFile2 from './illustrations/ZAddFile2.vue';
import ZAddNotes from './illustrations/ZAddNotes.vue';
import ZAddToCart from './illustrations/ZAddToCart.vue';
import ZAddUser from './illustrations/ZAddUser.vue';
import ZAgreement from './illustrations/ZAgreement.vue';
import ZAircraft from './illustrations/ZAircraft.vue';
import ZAirport from './illustrations/ZAirport.vue';
import ZAirSupport from './illustrations/ZAirSupport.vue';
import ZAlert from './illustrations/ZAlert.vue';
import ZAlgolia from './illustrations/ZAlgolia.vue';
import ZAlienScience from './illustrations/ZAlienScience.vue';
import ZAnalysis from './illustrations/ZAnalysis.vue';
import ZAnalytics from './illustrations/ZAnalytics.vue';
import ZAndroid from './illustrations/ZAndroid.vue';
import ZApartmentRent from './illustrations/ZApartmentRent.vue';
import ZAppreciation2 from './illustrations/ZAppreciation2.vue';
import ZAppInstallation from './illustrations/ZAppInstallation.vue';
import ZAroundTheWorld from './illustrations/ZAroundTheWorld.vue';
import ZArtificialIntelligence from './illustrations/ZArtificialIntelligence.vue';
import ZArtist from './illustrations/ZArtist.vue';
import ZArt from './illustrations/ZArt.vue';
import ZArtLover from './illustrations/ZArtLover.vue';
import ZAstronaut from './illustrations/ZAstronaut.vue';
import ZAuthentication from './illustrations/ZAuthentication.vue';
import ZAutumn2 from './illustrations/ZAutumn2.vue';
import ZAwards from './illustrations/ZAwards.vue';
import ZADayAtThePark from './illustrations/ZADayAtThePark.vue';
import ZAWholeYear from './illustrations/ZAWholeYear.vue';
import ZBaby from './illustrations/ZBaby.vue';
import ZBackInTheDay from './illustrations/ZBackInTheDay.vue';
import ZBackToSchool from './illustrations/ZBackToSchool.vue';
import ZBalloons from './illustrations/ZBalloons.vue';
import ZBarber from './illustrations/ZBarber.vue';
import ZBasketball from './illustrations/ZBasketball.vue';
import ZBeach from './illustrations/ZBeach.vue';
import ZBeerCelebration from './illustrations/ZBeerCelebration.vue';
import ZBeforeDawn from './illustrations/ZBeforeDawn.vue';
import ZBeginChat from './illustrations/ZBeginChat.vue';
import ZBeTheHero from './illustrations/ZBeTheHero.vue';
import ZBibliophile from './illustrations/ZBibliophile.vue';
import ZBirthdayCake from './illustrations/ZBirthdayCake.vue';
import ZBitcoin2 from './illustrations/ZBitcoin2.vue';
import ZBlankCanvas from './illustrations/ZBlankCanvas.vue';
import ZBlogging from './illustrations/ZBlogging.vue';
import ZBlog from './illustrations/ZBlog.vue';
import ZBooking from './illustrations/ZBooking.vue';
import ZBookmarks from './illustrations/ZBookmarks.vue';
import ZBookLover from './illustrations/ZBookLover.vue';
import ZBrainstorming from './illustrations/ZBrainstorming.vue';
import ZBroadcast from './illustrations/ZBroadcast.vue';
import ZBrowserStats from './illustrations/ZBrowserStats.vue';
import ZBtcP2p from './illustrations/ZBtcP2p.vue';
import ZBuddies from './illustrations/ZBuddies.vue';
import ZBuffer from './illustrations/ZBuffer.vue';
import ZBugFixing from './illustrations/ZBugFixing.vue';
import ZBuildingBlocks from './illustrations/ZBuildingBlocks.vue';
import ZBuilding from './illustrations/ZBuilding.vue';
import ZBusinessman from './illustrations/ZBusinessman.vue';
import ZBusinesswoman from './illustrations/ZBusinesswoman.vue';
import ZBusinessDeal from './illustrations/ZBusinessDeal.vue';
import ZBusinessPlan from './illustrations/ZBusinessPlan.vue';
import ZBusStop from './illustrations/ZBusStop.vue';
import ZByMyCar from './illustrations/ZByMyCar.vue';
import ZCalculator from './illustrations/ZCalculator.vue';
import ZCalendar from './illustrations/ZCalendar.vue';
import ZCalling from './illustrations/ZCalling.vue';
import ZCampfire from './illustrations/ZCampfire.vue';
import ZCamping from './illustrations/ZCamping.vue';
import ZCancel from './illustrations/ZCancel.vue';
import ZCandidate from './illustrations/ZCandidate.vue';
import ZCareerProgress from './illustrations/ZCareerProgress.vue';
import ZCautiousDog from './illustrations/ZCautiousDog.vue';
import ZCelebration from './illustrations/ZCelebration.vue';
import ZCharts from './illustrations/ZCharts.vue';
import ZChatting from './illustrations/ZChatting.vue';
import ZChat from './illustrations/ZChat.vue';
import ZCheckingBoxes from './illustrations/ZCheckingBoxes.vue';
import ZChecklist from './illustrations/ZChecklist.vue';
import ZChef from './illustrations/ZChef.vue';
import ZChildren from './illustrations/ZChildren.vue';
import ZChilling from './illustrations/ZChilling.vue';
import ZChoice from './illustrations/ZChoice.vue';
import ZChoose from './illustrations/ZChoose.vue';
import ZChristmasStocking from './illustrations/ZChristmasStocking.vue';
import ZChristmasTree from './illustrations/ZChristmasTree.vue';
import ZCircles from './illustrations/ZCircles.vue';
import ZCityDriver from './illustrations/ZCityDriver.vue';
import ZCityGirl from './illustrations/ZCityGirl.vue';
import ZCloudHosting from './illustrations/ZCloudHosting.vue';
import ZCloudSync from './illustrations/ZCloudSync.vue';
import ZCoWorkers from './illustrations/ZCoWorkers.vue';
import ZCoWorking from './illustrations/ZCoWorking.vue';
import ZCodeTyping from './illustrations/ZCodeTyping.vue';
import ZCoding from './illustrations/ZCoding.vue';
import ZCoffeeBreak from './illustrations/ZCoffeeBreak.vue';
import ZCollaboration2 from './illustrations/ZCollaboration2.vue';
import ZCollecting from './illustrations/ZCollecting.vue';
import ZCollection from './illustrations/ZCollection.vue';
import ZCommunity from './illustrations/ZCommunity.vue';
import ZCompleted from './illustrations/ZCompleted.vue';
import ZComposeMusic from './illustrations/ZComposeMusic.vue';
import ZConferenceSpeaker from './illustrations/ZConferenceSpeaker.vue';
import ZConference from './illustrations/ZConference.vue';
import ZConfirmation from './illustrations/ZConfirmation.vue';
import ZConfirmed from './illustrations/ZConfirmed.vue';
import ZConnected from './illustrations/ZConnected.vue';
import ZConnectedWorld from './illustrations/ZConnectedWorld.vue';
import ZConnectingTeams3 from './illustrations/ZConnectingTeams3.vue';
import ZContactUs from './illustrations/ZContactUs.vue';
import ZContainerShip from './illustrations/ZContainerShip.vue';
import ZContemplating from './illustrations/ZContemplating.vue';
import ZContentCreator from './illustrations/ZContentCreator.vue';
import ZContent from './illustrations/ZContent.vue';
import ZContrast from './illustrations/ZContrast.vue';
import ZControlPanel1 from './illustrations/ZControlPanel1.vue';
import ZConversation from './illustrations/ZConversation.vue';
import ZConvert from './illustrations/ZConvert.vue';
import ZCountrySide from './illustrations/ZCountrySide.vue';
import ZCouple from './illustrations/ZCouple.vue';
import ZCreate from './illustrations/ZCreate.vue';
import ZCreationProcess from './illustrations/ZCreationProcess.vue';
import ZCreativeThinking from './illustrations/ZCreativeThinking.vue';
import ZCreativeWoman from './illustrations/ZCreativeWoman.vue';
import ZCreativity from './illustrations/ZCreativity.vue';
import ZCreditCard from './illustrations/ZCreditCard.vue';
import ZCreditCardPayment from './illustrations/ZCreditCardPayment.vue';
import ZCryptoFlowers from './illustrations/ZCryptoFlowers.vue';
import ZCustomerSurvey from './illustrations/ZCustomerSurvey.vue';
import ZDarkAlley from './illustrations/ZDarkAlley.vue';
import ZDarkAnalytics from './illustrations/ZDarkAnalytics.vue';
import ZDashboard from './illustrations/ZDashboard.vue';
import ZDataPoints from './illustrations/ZDataPoints.vue';
import ZDataReport from './illustrations/ZDataReport.vue';
import ZDataTrends from './illustrations/ZDataTrends.vue';
import ZData from './illustrations/ZData.vue';
import ZDeliveries from './illustrations/ZDeliveries.vue';
import ZDeparting from './illustrations/ZDeparting.vue';
import ZDepi from './illustrations/ZDepi.vue';
import ZDesignerGirl from './illustrations/ZDesignerGirl.vue';
import ZDesigner from './illustrations/ZDesigner.vue';
import ZDesignerLife from './illustrations/ZDesignerLife.vue';
import ZDesignCommunity from './illustrations/ZDesignCommunity.vue';
import ZDesignProcess from './illustrations/ZDesignProcess.vue';
import ZDesignThinking from './illustrations/ZDesignThinking.vue';
import ZDesignTools from './illustrations/ZDesignTools.vue';
import ZDestination from './illustrations/ZDestination.vue';
import ZDeveloperActivity from './illustrations/ZDeveloperActivity.vue';
import ZDevelopment from './illustrations/ZDevelopment.vue';
import ZDevices from './illustrations/ZDevices.vue';
import ZDigitalNomad from './illustrations/ZDigitalNomad.vue';
import ZDirections from './illustrations/ZDirections.vue';
import ZDiscount from './illustrations/ZDiscount.vue';
import ZDoctors from './illustrations/ZDoctors.vue';
import ZDoctor from './illustrations/ZDoctor.vue';
import ZDogWalking from './illustrations/ZDogWalking.vue';
import ZDollPlay from './illustrations/ZDollPlay.vue';
import ZDomainNames from './illustrations/ZDomainNames.vue';
import ZDownload from './illustrations/ZDownload.vue';
import ZDreamer from './illustrations/ZDreamer.vue';
import ZDroneDelivery from './illustrations/ZDroneDelivery.vue';
import ZDroneRace from './illustrations/ZDroneRace.vue';
import ZDuaLipa from './illustrations/ZDuaLipa.vue';
import ZEasterEggHunt from './illustrations/ZEasterEggHunt.vue';
import ZEatingTogether from './illustrations/ZEatingTogether.vue';
import ZElectricCar from './illustrations/ZElectricCar.vue';
import ZEmails from './illustrations/ZEmails.vue';
import ZEmailCampaign from './illustrations/ZEmailCampaign.vue';
import ZEmailCapture from './illustrations/ZEmailCapture.vue';
import ZEmpty from './illustrations/ZEmpty.vue';
import ZEnvelope from './illustrations/ZEnvelope.vue';
import ZEnvironment from './illustrations/ZEnvironment.vue';
import ZEthereumDesire from './illustrations/ZEthereumDesire.vue';
import ZEthereum from './illustrations/ZEthereum.vue';
import ZEvents from './illustrations/ZEvents.vue';
import ZEverydayDesign from './illustrations/ZEverydayDesign.vue';
import ZExams from './illustrations/ZExams.vue';
import ZExperts3 from './illustrations/ZExperts3.vue';
import ZExploring from './illustrations/ZExploring.vue';
import ZFallIsComing from './illustrations/ZFallIsComing.vue';
import ZFans from './illustrations/ZFans.vue';
import ZFashionBlogging from './illustrations/ZFashionBlogging.vue';
import ZFastCar from './illustrations/ZFastCar.vue';
import ZFastLoading from './illustrations/ZFastLoading.vue';
import ZFatherhood from './illustrations/ZFatherhood.vue';
import ZFeaturesOverview from './illustrations/ZFeaturesOverview.vue';
import ZFeelingBlue from './illustrations/ZFeelingBlue.vue';
import ZFestivities from './illustrations/ZFestivities.vue';
import ZFiles1 from './illustrations/ZFiles1.vue';
import ZFiles from './illustrations/ZFiles.vue';
import ZFilesSent from './illustrations/ZFilesSent.vue';
import ZFileBundle from './illustrations/ZFileBundle.vue';
import ZFileSearching from './illustrations/ZFileSearching.vue';
import ZFilingSystem from './illustrations/ZFilingSystem.vue';
import ZFilter from './illustrations/ZFilter.vue';
import ZFinance from './illustrations/ZFinance.vue';
import ZFinancialData from './illustrations/ZFinancialData.vue';
import ZFingerprint from './illustrations/ZFingerprint.vue';
import ZFinishLineKaterinaLimpitsouni from './illustrations/ZFinishLineKaterinaLimpitsouni.vue';
import ZFireworks from './illustrations/ZFireworks.vue';
import ZFirmware from './illustrations/ZFirmware.vue';
import ZFishing from './illustrations/ZFishing.vue';
import ZFishBowl from './illustrations/ZFishBowl.vue';
import ZFitnessTracker from './illustrations/ZFitnessTracker.vue';
import ZFloating from './illustrations/ZFloating.vue';
import ZFocus from './illustrations/ZFocus.vue';
import ZFolder from './illustrations/ZFolder.vue';
import ZFollowers from './illustrations/ZFollowers.vue';
import ZFollowing from './illustrations/ZFollowing.vue';
import ZFollowMeDrone from './illustrations/ZFollowMeDrone.vue';
import ZForever from './illustrations/ZForever.vue';
import ZForSale from './illustrations/ZForSale.vue';
import ZFreelancer from './illustrations/ZFreelancer.vue';
import ZFriendship from './illustrations/ZFriendship.vue';
import ZFrozenFigure from './illustrations/ZFrozenFigure.vue';
import ZGameDay from './illustrations/ZGameDay.vue';
import ZGaming from './illustrations/ZGaming.vue';
import ZGardening from './illustrations/ZGardening.vue';
import ZGdpr from './illustrations/ZGdpr.vue';
import ZGettingCoffee from './illustrations/ZGettingCoffee.vue';
import ZGift1 from './illustrations/ZGift1.vue';
import ZGifts from './illustrations/ZGifts.vue';
import ZGiftCard from './illustrations/ZGiftCard.vue';
import ZGirlJustWannaHaveFun from './illustrations/ZGirlJustWannaHaveFun.vue';
import ZGoal from './illustrations/ZGoal.vue';
import ZGoingUp from './illustrations/ZGoingUp.vue';
import ZGoldenGateBridge from './illustrations/ZGoldenGateBridge.vue';
import ZGoodDoggy from './illustrations/ZGoodDoggy.vue';
import ZGrades from './illustrations/ZGrades.vue';
import ZGradma from './illustrations/ZGradma.vue';
import ZGraduation from './illustrations/ZGraduation.vue';
import ZGroupChat from './illustrations/ZGroupChat.vue';
import ZGroupSelfie from './illustrations/ZGroupSelfie.vue';
import ZGrowing from './illustrations/ZGrowing.vue';
import ZGrowthAnalytics from './illustrations/ZGrowthAnalytics.vue';
import ZHamburger from './illustrations/ZHamburger.vue';
import ZHangOut from './illustrations/ZHangOut.vue';
import ZHappy2019 from './illustrations/ZHappy2019.vue';
import ZHappyBirthday from './illustrations/ZHappyBirthday.vue';
import ZHappyWomenDay from './illustrations/ZHappyWomenDay.vue';
import ZHavingFun from './illustrations/ZHavingFun.vue';
import ZHealthyHabit from './illustrations/ZHealthyHabit.vue';
import ZHeartbroken from './illustrations/ZHeartbroken.vue';
import ZHello from './illustrations/ZHello.vue';
import ZHighFive from './illustrations/ZHighFive.vue';
import ZHiking from './illustrations/ZHiking.vue';
import ZHire from './illustrations/ZHire.vue';
import ZHiring from './illustrations/ZHiring.vue';
import ZHomeRun from './illustrations/ZHomeRun.vue';
import ZHorrorMovie from './illustrations/ZHorrorMovie.vue';
import ZHouses3 from './illustrations/ZHouses3.vue';
import ZHouseSearching from './illustrations/ZHouseSearching.vue';
import ZImages from './illustrations/ZImages.vue';
import ZImagePost from './illustrations/ZImagePost.vue';
import ZImageUpload from './illustrations/ZImageUpload.vue';
import ZInboxCleanup from './illustrations/ZInboxCleanup.vue';
import ZInfluencer from './illustrations/ZInfluencer.vue';
import ZInstantSupport from './illustrations/ZInstantSupport.vue';
import ZInstructionManual from './illustrations/ZInstructionManual.vue';
import ZInteractionDesign from './illustrations/ZInteractionDesign.vue';
import ZInternetOnTheGo from './illustrations/ZInternetOnTheGo.vue';
import ZInterview from './illustrations/ZInterview.vue';
import ZIntoTheNight from './illustrations/ZIntoTheNight.vue';
import ZInvesting from './illustrations/ZInvesting.vue';
import ZInvite from './illustrations/ZInvite.vue';
import ZInLove from './illustrations/ZInLove.vue';
import ZInProgress from './illustrations/ZInProgress.vue';
import ZInSync from './illustrations/ZInSync.vue';
import ZInTheOffice from './illustrations/ZInTheOffice.vue';
import ZInThePool from './illustrations/ZInThePool.vue';
import ZInThought from './illustrations/ZInThought.vue';
import ZICanFly from './illustrations/ZICanFly.vue';
import ZJapan from './illustrations/ZJapan.vue';
import ZJasonMask from './illustrations/ZJasonMask.vue';
import ZJavascriptFrameworks from './illustrations/ZJavascriptFrameworks.vue';
import ZJobHunt from './illustrations/ZJobHunt.vue';
import ZJogging from './illustrations/ZJogging.vue';
import ZJourney from './illustrations/ZJourney.vue';
import ZJoyride from './illustrations/ZJoyride.vue';
import ZJudgeKaterinaLimpitsouni from './illustrations/ZJudgeKaterinaLimpitsouni.vue';
import ZKnowledge from './illustrations/ZKnowledge.vue';
import ZLaravelAndVue from './illustrations/ZLaravelAndVue.vue';
import ZLateAtNight from './illustrations/ZLateAtNight.vue';
import ZLaunching from './illustrations/ZLaunching.vue';
import ZLighthouse from './illustrations/ZLighthouse.vue';
import ZLiveCollaboration from './illustrations/ZLiveCollaboration.vue';
import ZLoading from './illustrations/ZLoading.vue';
import ZLogin from './illustrations/ZLogin.vue';
import ZLogistics from './illustrations/ZLogistics.vue';
import ZLost from './illustrations/ZLost.vue';
import ZLoveIsInTheAir from './illustrations/ZLoveIsInTheAir.vue';
import ZLove from './illustrations/ZLove.vue';
import ZMail1 from './illustrations/ZMail1.vue';
import ZMail2 from './illustrations/ZMail2.vue';
import ZMailBox from './illustrations/ZMailBox.vue';
import ZMail from './illustrations/ZMail.vue';
import ZMaintenance from './illustrations/ZMaintenance.vue';
import ZMakerLaunch from './illustrations/ZMakerLaunch.vue';
import ZMakeupArtist from './illustrations/ZMakeupArtist.vue';
import ZMakeItRain from './illustrations/ZMakeItRain.vue';
import ZMakingArt from './illustrations/ZMakingArt.vue';
import ZMan from './illustrations/ZMan.vue';
import ZMap from './illustrations/ZMap.vue';
import ZMapLight from './illustrations/ZMapLight.vue';
import ZMarilyn from './illustrations/ZMarilyn.vue';
import ZMarketing from './illustrations/ZMarketing.vue';
import ZMayTheForce from './illustrations/ZMayTheForce.vue';
import ZMediaPlayer from './illustrations/ZMediaPlayer.vue';
import ZMedicine from './illustrations/ZMedicine.vue';
import ZMeditating from './illustrations/ZMeditating.vue';
import ZMeditation from './illustrations/ZMeditation.vue';
import ZMeeting from './illustrations/ZMeeting.vue';
import ZMemoryStorage from './illustrations/ZMemoryStorage.vue';
import ZMessages1 from './illustrations/ZMessages1.vue';
import ZMessageSent from './illustrations/ZMessageSent.vue';
import ZMessagingFun from './illustrations/ZMessagingFun.vue';
import ZMessaging from './illustrations/ZMessaging.vue';
import ZMessenger from './illustrations/ZMessenger.vue';
import ZMetrics from './illustrations/ZMetrics.vue';
import ZMillennialGirl from './illustrations/ZMillennialGirl.vue';
import ZMindfulness from './illustrations/ZMindfulness.vue';
import ZMindMap from './illustrations/ZMindMap.vue';
import ZMintTea from './illustrations/ZMintTea.vue';
import ZMissedChances from './illustrations/ZMissedChances.vue';
import ZMissionImpossible from './illustrations/ZMissionImpossible.vue';
import ZMobileApps from './illustrations/ZMobileApps.vue';
import ZMobileBrowsers from './illustrations/ZMobileBrowsers.vue';
import ZMobileLife from './illustrations/ZMobileLife.vue';
import ZMobileMarketing from './illustrations/ZMobileMarketing.vue';
import ZMobilePayments from './illustrations/ZMobilePayments.vue';
import ZMobile from './illustrations/ZMobile.vue';
import ZMobileTesting from './illustrations/ZMobileTesting.vue';
import ZModernLife from './illustrations/ZModernLife.vue';
import ZModernWoman from './illustrations/ZModernWoman.vue';
import ZMomentToRemember from './illustrations/ZMomentToRemember.vue';
import ZMonitor from './illustrations/ZMonitor.vue';
import ZMoreMusic from './illustrations/ZMoreMusic.vue';
import ZMorningEssentials from './illustrations/ZMorningEssentials.vue';
import ZMotherhood from './illustrations/ZMotherhood.vue';
import ZMovieNight from './illustrations/ZMovieNight.vue';
import ZMovingForward from './illustrations/ZMovingForward.vue';
import ZMultitasking from './illustrations/ZMultitasking.vue';
import ZMusic from './illustrations/ZMusic.vue';
import ZMyPassword from './illustrations/ZMyPassword.vue';
import ZNavigation from './illustrations/ZNavigation.vue';
import ZNewsletter from './illustrations/ZNewsletter.vue';
import ZNews from './illustrations/ZNews.vue';
import ZNewMessage from './illustrations/ZNewMessage.vue';
import ZNightCalls from './illustrations/ZNightCalls.vue';
import ZNinja from './illustrations/ZNinja.vue';
import ZNotebook from './illustrations/ZNotebook.vue';
import ZNotes1 from './illustrations/ZNotes1.vue';
import ZNoteList from './illustrations/ZNoteList.vue';
import ZNotify from './illustrations/ZNotify.vue';
import ZNoData from './illustrations/ZNoData.vue';
import ZOffRoad from './illustrations/ZOffRoad.vue';
import ZOldDay from './illustrations/ZOldDay.vue';
import ZOnboarding from './illustrations/ZOnboarding.vue';
import ZOnline from './illustrations/ZOnline.vue';
import ZOnlineFriends from './illustrations/ZOnlineFriends.vue';
import ZOnlinePage from './illustrations/ZOnlinePage.vue';
import ZOnlineShopping from './illustrations/ZOnlineShopping.vue';
import ZOnlineWishes from './illustrations/ZOnlineWishes.vue';
import ZOnlineWorld from './illustrations/ZOnlineWorld.vue';
import ZOnTheOffice from './illustrations/ZOnTheOffice.vue';
import ZOnTheWay from './illustrations/ZOnTheWay.vue';
import ZOpened from './illustrations/ZOpened.vue';
import ZOpenSource from './illustrations/ZOpenSource.vue';
import ZOperatingSystem from './illustrations/ZOperatingSystem.vue';
import ZOrderConfirmed from './illustrations/ZOrderConfirmed.vue';
import ZOrdinaryDay from './illustrations/ZOrdinaryDay.vue';
import ZOrganizePhotos from './illustrations/ZOrganizePhotos.vue';
import ZOrganizeResume from './illustrations/ZOrganizeResume.vue';
import ZOrganizingProjects1 from './illustrations/ZOrganizingProjects1.vue';
import ZOuterSpace from './illustrations/ZOuterSpace.vue';
import ZPageNotFound from './illustrations/ZPageNotFound.vue';
import ZPairProgramming from './illustrations/ZPairProgramming.vue';
import ZPalette from './illustrations/ZPalette.vue';
import ZPassingBy from './illustrations/ZPassingBy.vue';
import ZPayments from './illustrations/ZPayments.vue';
import ZPcsocial from './illustrations/ZPcsocial.vue';
import ZPedestrianCrossing from './illustrations/ZPedestrianCrossing.vue';
import ZPen from './illustrations/ZPen.vue';
import ZPeopleSearch from './illustrations/ZPeopleSearch.vue';
import ZPersonalization from './illustrations/ZPersonalization.vue';
import ZPersonalData from './illustrations/ZPersonalData.vue';
import ZPersonalNotes from './illustrations/ZPersonalNotes.vue';
import ZPersonalSettings from './illustrations/ZPersonalSettings.vue';
import ZPersonalSite from './illustrations/ZPersonalSite.vue';
import ZPersonalTrainer from './illustrations/ZPersonalTrainer.vue';
import ZPhotocopy from './illustrations/ZPhotocopy.vue';
import ZPhotos from './illustrations/ZPhotos.vue';
import ZPhoto from './illustrations/ZPhoto.vue';
import ZPhotoSharing1 from './illustrations/ZPhotoSharing1.vue';
import ZPieChart from './illustrations/ZPieChart.vue';
import ZPilates from './illustrations/ZPilates.vue';
import ZPizzaSharing from './illustrations/ZPizzaSharing.vue';
import ZPlainCreditCard from './illustrations/ZPlainCreditCard.vue';
import ZPlayfulCat from './illustrations/ZPlayfulCat.vue';
import ZPodcastAudience from './illustrations/ZPodcastAudience.vue';
import ZPodcast from './illustrations/ZPodcast.vue';
import ZPortfolio from './illustrations/ZPortfolio.vue';
import ZPost2 from './illustrations/ZPost2.vue';
import ZPostingPhoto from './illustrations/ZPostingPhoto.vue';
import ZPosts from './illustrations/ZPosts.vue';
import ZPostOnline from './illustrations/ZPostOnline.vue';
import ZPowerful from './illustrations/ZPowerful.vue';
import ZPreferences from './illustrations/ZPreferences.vue';
import ZPresentation1 from './illustrations/ZPresentation1.vue';
import ZPressPlay from './illustrations/ZPressPlay.vue';
import ZPrintingInvoices from './illustrations/ZPrintingInvoices.vue';
import ZProblemSolving from './illustrations/ZProblemSolving.vue';
import ZProcessing from './illustrations/ZProcessing.vue';
import ZProductHunt from './illustrations/ZProductHunt.vue';
import ZProductTeardown from './illustrations/ZProductTeardown.vue';
import ZProductTour from './illustrations/ZProductTour.vue';
import ZProfile from './illustrations/ZProfile.vue';
import ZProfileData from './illustrations/ZProfileData.vue';
import ZProfilePic from './illustrations/ZProfilePic.vue';
import ZProgrammer from './illustrations/ZProgrammer.vue';
import ZProgramming from './illustrations/ZProgramming.vue';
import ZProjections from './illustrations/ZProjections.vue';
import ZPrototypingProcess from './illustrations/ZPrototypingProcess.vue';
import ZQaEngineers from './illustrations/ZQaEngineers.vue';
import ZQuestions from './illustrations/ZQuestions.vue';
import ZQueue from './illustrations/ZQueue.vue';
import ZQuittingTime from './illustrations/ZQuittingTime.vue';
import ZReact from './illustrations/ZReact.vue';
import ZReadingList from './illustrations/ZReadingList.vue';
import ZRealTimeSync from './illustrations/ZRealTimeSync.vue';
import ZRecording from './illustrations/ZRecording.vue';
import ZRefreshing from './illustrations/ZRefreshing.vue';
import ZRelaxation1 from './illustrations/ZRelaxation1.vue';
import ZRelaxingAtHome from './illustrations/ZRelaxingAtHome.vue';
import ZReport from './illustrations/ZReport.vue';
import ZResponsive from './illustrations/ZResponsive.vue';
import ZResume from './illustrations/ZResume.vue';
import ZResumeFolder2 from './illustrations/ZResumeFolder2.vue';
import ZRevenue from './illustrations/ZRevenue.vue';
import ZRideABicycle from './illustrations/ZRideABicycle.vue';
import ZRising from './illustrations/ZRising.vue';
import ZRobotics from './illustrations/ZRobotics.vue';
import ZRomanticGetaway from './illustrations/ZRomanticGetaway.vue';
import ZRunningWild from './illustrations/ZRunningWild.vue';
import ZSafe from './illustrations/ZSafe.vue';
import ZSantaClaus from './illustrations/ZSantaClaus.vue';
import ZSavings from './illustrations/ZSavings.vue';
import ZSchedule from './illustrations/ZSchedule.vue';
import ZScience from './illustrations/ZScience.vue';
import ZScooter from './illustrations/ZScooter.vue';
import ZScrumBoard from './illustrations/ZScrumBoard.vue';
import ZSculpting from './illustrations/ZSculpting.vue';
import ZSearch from './illustrations/ZSearch.vue';
import ZSearchEngines from './illustrations/ZSearchEngines.vue';
import ZSecureData from './illustrations/ZSecureData.vue';
import ZSecureServer from './illustrations/ZSecureServer.vue';
import ZSecurity from './illustrations/ZSecurity.vue';
import ZSecurityOn from './illustrations/ZSecurityOn.vue';
import ZSegmentation from './illustrations/ZSegmentation.vue';
import ZSegment from './illustrations/ZSegment.vue';
import ZSelect from './illustrations/ZSelect.vue';
import ZSelfie1 from './illustrations/ZSelfie1.vue';
import ZSelfieTime from './illustrations/ZSelfieTime.vue';
import ZServerDown from './illustrations/ZServerDown.vue';
import ZServer from './illustrations/ZServer.vue';
import ZServerStatus from './illustrations/ZServerStatus.vue';
import ZSetupAnalytics from './illustrations/ZSetupAnalytics.vue';
import ZSetup from './illustrations/ZSetup.vue';
import ZSetupWizard from './illustrations/ZSetupWizard.vue';
import ZShopping from './illustrations/ZShopping.vue';
import ZSiteStats from './illustrations/ZSiteStats.vue';
import ZSkateboarding from './illustrations/ZSkateboarding.vue';
import ZSleepAnalysis from './illustrations/ZSleepAnalysis.vue';
import ZSmartHome from './illustrations/ZSmartHome.vue';
import ZSmileyFace from './illustrations/ZSmileyFace.vue';
import ZSnowman1 from './illustrations/ZSnowman1.vue';
import ZSocialDashboard from './illustrations/ZSocialDashboard.vue';
import ZSocialGrowth from './illustrations/ZSocialGrowth.vue';
import ZSocialIdeas from './illustrations/ZSocialIdeas.vue';
import ZSocialLife from './illustrations/ZSocialLife.vue';
import ZSocialNetworking from './illustrations/ZSocialNetworking.vue';
import ZSocialShare from './illustrations/ZSocialShare.vue';
import ZSocialStrategy from './illustrations/ZSocialStrategy.vue';
import ZSocialTree1 from './illustrations/ZSocialTree1.vue';
import ZSocialUpdate from './illustrations/ZSocialUpdate.vue';
import ZSoftwareEngineer from './illustrations/ZSoftwareEngineer.vue';
import ZSpecs from './illustrations/ZSpecs.vue';
import ZSpreadsheets from './illustrations/ZSpreadsheets.vue';
import ZStabilityBall from './illustrations/ZStabilityBall.vue';
import ZStartled from './illustrations/ZStartled.vue';
import ZStartman1 from './illustrations/ZStartman1.vue';
import ZStartupLife from './illustrations/ZStartupLife.vue';
import ZStaticAssets from './illustrations/ZStaticAssets.vue';
import ZStatistics from './illustrations/ZStatistics.vue';
import ZStatusUpdate from './illustrations/ZStatusUpdate.vue';
import ZStayingIn from './illustrations/ZStayingIn.vue';
import ZStepToTheSun from './illustrations/ZStepToTheSun.vue';
import ZStreetFood from './illustrations/ZStreetFood.vue';
import ZStripePayments from './illustrations/ZStripePayments.vue';
import ZStudying from './illustrations/ZStudying.vue';
import ZSubway from './illustrations/ZSubway.vue';
import ZSuccessfulPurchase from './illustrations/ZSuccessfulPurchase.vue';
import ZSunnyDay from './illustrations/ZSunnyDay.vue';
import ZSuperhero from './illustrations/ZSuperhero.vue';
import ZSuperThankYou from './illustrations/ZSuperThankYou.vue';
import ZSuperWoman from './illustrations/ZSuperWoman.vue';
import ZSurfer from './illustrations/ZSurfer.vue';
import ZSwipeProfiles1 from './illustrations/ZSwipeProfiles1.vue';
import ZSync4 from './illustrations/ZSync4.vue';
import ZSynchronize from './illustrations/ZSynchronize.vue';
import ZTabs from './illustrations/ZTabs.vue';
import ZTaken from './illustrations/ZTaken.vue';
import ZTakingNotes from './illustrations/ZTakingNotes.vue';
import ZTarget from './illustrations/ZTarget.vue';
import ZTask from './illustrations/ZTask.vue';
import ZTasting from './illustrations/ZTasting.vue';
import ZTeacher from './illustrations/ZTeacher.vue';
import ZTeaching from './illustrations/ZTeaching.vue';
import ZTeam from './illustrations/ZTeam.vue';
import ZTeamPage from './illustrations/ZTeamPage.vue';
import ZTeamSpirit from './illustrations/ZTeamSpirit.vue';
import ZTeamWork from './illustrations/ZTeamWork.vue';
import ZTeddyBear from './illustrations/ZTeddyBear.vue';
import ZTexting from './illustrations/ZTexting.vue';
import ZThoughts from './illustrations/ZThoughts.vue';
import ZThroughTheDesert from './illustrations/ZThroughTheDesert.vue';
import ZTimeline from './illustrations/ZTimeline.vue';
import ZTimeManagement from './illustrations/ZTimeManagement.vue';
import ZTogether from './illustrations/ZTogether.vue';
import ZToyCar from './illustrations/ZToyCar.vue';
import ZToDoList from './illustrations/ZToDoList.vue';
import ZToDo from './illustrations/ZToDo.vue';
import ZToTheStars from './illustrations/ZToTheStars.vue';
import ZTrackAndField from './illustrations/ZTrackAndField.vue';
import ZTransferFiles from './illustrations/ZTransferFiles.vue';
import ZTravelers from './illustrations/ZTravelers.vue';
import ZTraveling from './illustrations/ZTraveling.vue';
import ZTravelBooking from './illustrations/ZTravelBooking.vue';
import ZTreasure from './illustrations/ZTreasure.vue';
import ZTrip from './illustrations/ZTrip.vue';
import ZTrueFriends from './illustrations/ZTrueFriends.vue';
import ZTweetstorm from './illustrations/ZTweetstorm.vue';
import ZTypewriter from './illustrations/ZTypewriter.vue';
import ZTyping from './illustrations/ZTyping.vue';
import ZUnboxing from './illustrations/ZUnboxing.vue';
import ZUnderConstruction from './illustrations/ZUnderConstruction.vue';
import ZUpdate from './illustrations/ZUpdate.vue';
import ZUpgrade from './illustrations/ZUpgrade.vue';
import ZUploading from './illustrations/ZUploading.vue';
import ZUpload from './illustrations/ZUpload.vue';
import ZUploadImage from './illustrations/ZUploadImage.vue';
import ZUpvote from './illustrations/ZUpvote.vue';
import ZUsabilityTesting from './illustrations/ZUsabilityTesting.vue';
import ZUserFlow from './illustrations/ZUserFlow.vue';
import ZVault from './illustrations/ZVault.vue';
import ZVehicleSale from './illustrations/ZVehicleSale.vue';
import ZVersionControl from './illustrations/ZVersionControl.vue';
import ZVideographer from './illustrations/ZVideographer.vue';
import ZVideoCall from './illustrations/ZVideoCall.vue';
import ZVirtualReality from './illustrations/ZVirtualReality.vue';
import ZVisualData from './illustrations/ZVisualData.vue';
import ZVoiceControl from './illustrations/ZVoiceControl.vue';
import ZVrChat from './illustrations/ZVrChat.vue';
import ZWalkInTheCity from './illustrations/ZWalkInTheCity.vue';
import ZWallet from './illustrations/ZWallet.vue';
import ZWallPost from './illustrations/ZWallPost.vue';
import ZWarning from './illustrations/ZWarning.vue';
import ZWeatherApp from './illustrations/ZWeatherApp.vue';
import ZWeather from './illustrations/ZWeather.vue';
import ZWebsiteSetup from './illustrations/ZWebsiteSetup.vue';
import ZWebDevices from './illustrations/ZWebDevices.vue';
import ZWedding from './illustrations/ZWedding.vue';
import ZWelcome from './illustrations/ZWelcome.vue';
import ZWindows from './illustrations/ZWindows.vue';
import ZWindowShopping from './illustrations/ZWindowShopping.vue';
import ZWindTurbine from './illustrations/ZWindTurbine.vue';
import ZWinners from './illustrations/ZWinners.vue';
import ZWinterDesigner from './illustrations/ZWinterDesigner.vue';
import ZWinterOlympics from './illustrations/ZWinterOlympics.vue';
import ZWireframing from './illustrations/ZWireframing.vue';
import ZWishes from './illustrations/ZWishes.vue';
import ZWishlist from './illustrations/ZWishlist.vue';
import ZWitch from './illustrations/ZWitch.vue';
import ZWoman from './illustrations/ZWoman.vue';
import ZWomenDay from './illustrations/ZWomenDay.vue';
import ZWordpress from './illustrations/ZWordpress.vue';
import ZWordOfMouth from './illustrations/ZWordOfMouth.vue';
import ZWorking from './illustrations/ZWorking.vue';
import ZWorkingLate from './illustrations/ZWorkingLate.vue';
import ZWorkingRemotely from './illustrations/ZWorkingRemotely.vue';
import ZWorkout from './illustrations/ZWorkout.vue';
import ZWorkChat from './illustrations/ZWorkChat.vue';
import ZWorkTime from './illustrations/ZWorkTime.vue';
import ZWorld from './illustrations/ZWorld.vue';
import ZXmasSurprise from './illustrations/ZXmasSurprise.vue';
import ZYacht from './illustrations/ZYacht.vue';
import ZYoungAndHappy from './illustrations/ZYoungAndHappy.vue';
import ZYoutubeTutorial from './illustrations/ZYoutubeTutorial.vue';

export default {
	name: 'ZIllustration',
	components:
	{
		Z3dModeling,
		ZAboutMe,
		ZAcceptRequest,
		ZAcceptTerms,
		ZAccount,
		ZActiveSupport,
		ZAddress,
		ZAddFile2,
		ZAddNotes,
		ZAddToCart,
		ZAddUser,
		ZAgreement,
		ZAircraft,
		ZAirport,
		ZAirSupport,
		ZAlert,
		ZAlgolia,
		ZAlienScience,
		ZAnalysis,
		ZAnalytics,
		ZAndroid,
		ZApartmentRent,
		ZAppreciation2,
		ZAppInstallation,
		ZAroundTheWorld,
		ZArtificialIntelligence,
		ZArtist,
		ZArt,
		ZArtLover,
		ZAstronaut,
		ZAuthentication,
		ZAutumn2,
		ZAwards,
		ZADayAtThePark,
		ZAWholeYear,
		ZBaby,
		ZBackInTheDay,
		ZBackToSchool,
		ZBalloons,
		ZBarber,
		ZBasketball,
		ZBeach,
		ZBeerCelebration,
		ZBeforeDawn,
		ZBeginChat,
		ZBeTheHero,
		ZBibliophile,
		ZBirthdayCake,
		ZBitcoin2,
		ZBlankCanvas,
		ZBlogging,
		ZBlog,
		ZBooking,
		ZBookmarks,
		ZBookLover,
		ZBrainstorming,
		ZBroadcast,
		ZBrowserStats,
		ZBtcP2p,
		ZBuddies,
		ZBuffer,
		ZBugFixing,
		ZBuildingBlocks,
		ZBuilding,
		ZBusinessman,
		ZBusinesswoman,
		ZBusinessDeal,
		ZBusinessPlan,
		ZBusStop,
		ZByMyCar,
		ZCalculator,
		ZCalendar,
		ZCalling,
		ZCampfire,
		ZCamping,
		ZCancel,
		ZCandidate,
		ZCareerProgress,
		ZCautiousDog,
		ZCelebration,
		ZCharts,
		ZChatting,
		ZChat,
		ZCheckingBoxes,
		ZChecklist,
		ZChef,
		ZChildren,
		ZChilling,
		ZChoice,
		ZChoose,
		ZChristmasStocking,
		ZChristmasTree,
		ZCircles,
		ZCityDriver,
		ZCityGirl,
		ZCloudHosting,
		ZCloudSync,
		ZCoWorkers,
		ZCoWorking,
		ZCodeTyping,
		ZCoding,
		ZCoffeeBreak,
		ZCollaboration2,
		ZCollecting,
		ZCollection,
		ZCommunity,
		ZCompleted,
		ZComposeMusic,
		ZConferenceSpeaker,
		ZConference,
		ZConfirmation,
		ZConfirmed,
		ZConnected,
		ZConnectedWorld,
		ZConnectingTeams3,
		ZContactUs,
		ZContainerShip,
		ZContemplating,
		ZContentCreator,
		ZContent,
		ZContrast,
		ZControlPanel1,
		ZConversation,
		ZConvert,
		ZCountrySide,
		ZCouple,
		ZCreate,
		ZCreationProcess,
		ZCreativeThinking,
		ZCreativeWoman,
		ZCreativity,
		ZCreditCard,
		ZCreditCardPayment,
		ZCryptoFlowers,
		ZCustomerSurvey,
		ZDarkAlley,
		ZDarkAnalytics,
		ZDashboard,
		ZDataPoints,
		ZDataReport,
		ZDataTrends,
		ZData,
		ZDeliveries,
		ZDeparting,
		ZDepi,
		ZDesignerGirl,
		ZDesigner,
		ZDesignerLife,
		ZDesignCommunity,
		ZDesignProcess,
		ZDesignThinking,
		ZDesignTools,
		ZDestination,
		ZDeveloperActivity,
		ZDevelopment,
		ZDevices,
		ZDigitalNomad,
		ZDirections,
		ZDiscount,
		ZDoctors,
		ZDoctor,
		ZDogWalking,
		ZDollPlay,
		ZDomainNames,
		ZDownload,
		ZDreamer,
		ZDroneDelivery,
		ZDroneRace,
		ZDuaLipa,
		ZEasterEggHunt,
		ZEatingTogether,
		ZElectricCar,
		ZEmails,
		ZEmailCampaign,
		ZEmailCapture,
		ZEmpty,
		ZEnvelope,
		ZEnvironment,
		ZEthereumDesire,
		ZEthereum,
		ZEvents,
		ZEverydayDesign,
		ZExams,
		ZExperts3,
		ZExploring,
		ZFallIsComing,
		ZFans,
		ZFashionBlogging,
		ZFastCar,
		ZFastLoading,
		ZFatherhood,
		ZFeaturesOverview,
		ZFeelingBlue,
		ZFestivities,
		ZFiles1,
		ZFiles,
		ZFilesSent,
		ZFileBundle,
		ZFileSearching,
		ZFilingSystem,
		ZFilter,
		ZFinance,
		ZFinancialData,
		ZFingerprint,
		ZFinishLineKaterinaLimpitsouni,
		ZFireworks,
		ZFirmware,
		ZFishing,
		ZFishBowl,
		ZFitnessTracker,
		ZFloating,
		ZFocus,
		ZFolder,
		ZFollowers,
		ZFollowing,
		ZFollowMeDrone,
		ZForever,
		ZForSale,
		ZFreelancer,
		ZFriendship,
		ZFrozenFigure,
		ZGameDay,
		ZGaming,
		ZGardening,
		ZGdpr,
		ZGettingCoffee,
		ZGift1,
		ZGifts,
		ZGiftCard,
		ZGirlJustWannaHaveFun,
		ZGoal,
		ZGoingUp,
		ZGoldenGateBridge,
		ZGoodDoggy,
		ZGrades,
		ZGradma,
		ZGraduation,
		ZGroupChat,
		ZGroupSelfie,
		ZGrowing,
		ZGrowthAnalytics,
		ZHamburger,
		ZHangOut,
		ZHappy2019,
		ZHappyBirthday,
		ZHappyWomenDay,
		ZHavingFun,
		ZHealthyHabit,
		ZHeartbroken,
		ZHello,
		ZHighFive,
		ZHiking,
		ZHire,
		ZHiring,
		ZHomeRun,
		ZHorrorMovie,
		ZHouses3,
		ZHouseSearching,
		ZImages,
		ZImagePost,
		ZImageUpload,
		ZInboxCleanup,
		ZInfluencer,
		ZInstantSupport,
		ZInstructionManual,
		ZInteractionDesign,
		ZInternetOnTheGo,
		ZInterview,
		ZIntoTheNight,
		ZInvesting,
		ZInvite,
		ZInLove,
		ZInProgress,
		ZInSync,
		ZInTheOffice,
		ZInThePool,
		ZInThought,
		ZICanFly,
		ZJapan,
		ZJasonMask,
		ZJavascriptFrameworks,
		ZJobHunt,
		ZJogging,
		ZJourney,
		ZJoyride,
		ZJudgeKaterinaLimpitsouni,
		ZKnowledge,
		ZLaravelAndVue,
		ZLateAtNight,
		ZLaunching,
		ZLighthouse,
		ZLiveCollaboration,
		ZLoading,
		ZLogin,
		ZLogistics,
		ZLost,
		ZLoveIsInTheAir,
		ZLove,
		ZMail1,
		ZMail2,
		ZMailBox,
		ZMail,
		ZMaintenance,
		ZMakerLaunch,
		ZMakeupArtist,
		ZMakeItRain,
		ZMakingArt,
		ZMan,
		ZMap,
		ZMapLight,
		ZMarilyn,
		ZMarketing,
		ZMayTheForce,
		ZMediaPlayer,
		ZMedicine,
		ZMeditating,
		ZMeditation,
		ZMeeting,
		ZMemoryStorage,
		ZMessages1,
		ZMessageSent,
		ZMessagingFun,
		ZMessaging,
		ZMessenger,
		ZMetrics,
		ZMillennialGirl,
		ZMindfulness,
		ZMindMap,
		ZMintTea,
		ZMissedChances,
		ZMissionImpossible,
		ZMobileApps,
		ZMobileBrowsers,
		ZMobileLife,
		ZMobileMarketing,
		ZMobilePayments,
		ZMobile,
		ZMobileTesting,
		ZModernLife,
		ZModernWoman,
		ZMomentToRemember,
		ZMonitor,
		ZMoreMusic,
		ZMorningEssentials,
		ZMotherhood,
		ZMovieNight,
		ZMovingForward,
		ZMultitasking,
		ZMusic,
		ZMyPassword,
		ZNavigation,
		ZNewsletter,
		ZNews,
		ZNewMessage,
		ZNightCalls,
		ZNinja,
		ZNotebook,
		ZNotes1,
		ZNoteList,
		ZNotify,
		ZNoData,
		ZOffRoad,
		ZOldDay,
		ZOnboarding,
		ZOnline,
		ZOnlineFriends,
		ZOnlinePage,
		ZOnlineShopping,
		ZOnlineWishes,
		ZOnlineWorld,
		ZOnTheOffice,
		ZOnTheWay,
		ZOpened,
		ZOpenSource,
		ZOperatingSystem,
		ZOrderConfirmed,
		ZOrdinaryDay,
		ZOrganizePhotos,
		ZOrganizeResume,
		ZOrganizingProjects1,
		ZOuterSpace,
		ZPageNotFound,
		ZPairProgramming,
		ZPalette,
		ZPassingBy,
		ZPayments,
		ZPcsocial,
		ZPedestrianCrossing,
		ZPen,
		ZPeopleSearch,
		ZPersonalization,
		ZPersonalData,
		ZPersonalNotes,
		ZPersonalSettings,
		ZPersonalSite,
		ZPersonalTrainer,
		ZPhotocopy,
		ZPhotos,
		ZPhoto,
		ZPhotoSharing1,
		ZPieChart,
		ZPilates,
		ZPizzaSharing,
		ZPlainCreditCard,
		ZPlayfulCat,
		ZPodcastAudience,
		ZPodcast,
		ZPortfolio,
		ZPost2,
		ZPostingPhoto,
		ZPosts,
		ZPostOnline,
		ZPowerful,
		ZPreferences,
		ZPresentation1,
		ZPressPlay,
		ZPrintingInvoices,
		ZProblemSolving,
		ZProcessing,
		ZProductHunt,
		ZProductTeardown,
		ZProductTour,
		ZProfile,
		ZProfileData,
		ZProfilePic,
		ZProgrammer,
		ZProgramming,
		ZProjections,
		ZPrototypingProcess,
		ZQaEngineers,
		ZQuestions,
		ZQueue,
		ZQuittingTime,
		ZReact,
		ZReadingList,
		ZRealTimeSync,
		ZRecording,
		ZRefreshing,
		ZRelaxation1,
		ZRelaxingAtHome,
		ZReport,
		ZResponsive,
		ZResume,
		ZResumeFolder2,
		ZRevenue,
		ZRideABicycle,
		ZRising,
		ZRobotics,
		ZRomanticGetaway,
		ZRunningWild,
		ZSafe,
		ZSantaClaus,
		ZSavings,
		ZSchedule,
		ZScience,
		ZScooter,
		ZScrumBoard,
		ZSculpting,
		ZSearch,
		ZSearchEngines,
		ZSecureData,
		ZSecureServer,
		ZSecurity,
		ZSecurityOn,
		ZSegmentation,
		ZSegment,
		ZSelect,
		ZSelfie1,
		ZSelfieTime,
		ZServerDown,
		ZServer,
		ZServerStatus,
		ZSetupAnalytics,
		ZSetup,
		ZSetupWizard,
		ZShopping,
		ZSiteStats,
		ZSkateboarding,
		ZSleepAnalysis,
		ZSmartHome,
		ZSmileyFace,
		ZSnowman1,
		ZSocialDashboard,
		ZSocialGrowth,
		ZSocialIdeas,
		ZSocialLife,
		ZSocialNetworking,
		ZSocialShare,
		ZSocialStrategy,
		ZSocialTree1,
		ZSocialUpdate,
		ZSoftwareEngineer,
		ZSpecs,
		ZSpreadsheets,
		ZStabilityBall,
		ZStartled,
		ZStartman1,
		ZStartupLife,
		ZStaticAssets,
		ZStatistics,
		ZStatusUpdate,
		ZStayingIn,
		ZStepToTheSun,
		ZStreetFood,
		ZStripePayments,
		ZStudying,
		ZSubway,
		ZSuccessfulPurchase,
		ZSunnyDay,
		ZSuperhero,
		ZSuperThankYou,
		ZSuperWoman,
		ZSurfer,
		ZSwipeProfiles1,
		ZSync4,
		ZSynchronize,
		ZTabs,
		ZTaken,
		ZTakingNotes,
		ZTarget,
		ZTask,
		ZTasting,
		ZTeacher,
		ZTeaching,
		ZTeam,
		ZTeamPage,
		ZTeamSpirit,
		ZTeamWork,
		ZTeddyBear,
		ZTexting,
		ZThoughts,
		ZThroughTheDesert,
		ZTimeline,
		ZTimeManagement,
		ZTogether,
		ZToyCar,
		ZToDoList,
		ZToDo,
		ZToTheStars,
		ZTrackAndField,
		ZTransferFiles,
		ZTravelers,
		ZTraveling,
		ZTravelBooking,
		ZTreasure,
		ZTrip,
		ZTrueFriends,
		ZTweetstorm,
		ZTypewriter,
		ZTyping,
		ZUnboxing,
		ZUnderConstruction,
		ZUpdate,
		ZUpgrade,
		ZUploading,
		ZUpload,
		ZUploadImage,
		ZUpvote,
		ZUsabilityTesting,
		ZUserFlow,
		ZVault,
		ZVehicleSale,
		ZVersionControl,
		ZVideographer,
		ZVideoCall,
		ZVirtualReality,
		ZVisualData,
		ZVoiceControl,
		ZVrChat,
		ZWalkInTheCity,
		ZWallet,
		ZWallPost,
		ZWarning,
		ZWeatherApp,
		ZWeather,
		ZWebsiteSetup,
		ZWebDevices,
		ZWedding,
		ZWelcome,
		ZWindows,
		ZWindowShopping,
		ZWindTurbine,
		ZWinners,
		ZWinterDesigner,
		ZWinterOlympics,
		ZWireframing,
		ZWishes,
		ZWishlist,
		ZWitch,
		ZWoman,
		ZWomenDay,
		ZWordpress,
		ZWordOfMouth,
		ZWorking,
		ZWorkingLate,
		ZWorkingRemotely,
		ZWorkout,
		ZWorkChat,
		ZWorkTime,
		ZWorld,
		ZXmasSurprise,
		ZYacht,
		ZYoungAndHappy,
		ZYoutubeTutorial,
	},
	props:
	{
		type: String
	}
}
</script>