create table states (
  id serial primary key
  ,us_state varchar(30)
  ,state_abbrev varchar(2)
  ,reg_to_vote_url text
);


insert into states ( us_state, state_abbrev, reg_to_vote_url)
values
  ('Alabama' , 'AL', 'https://www.alabamainteractive.org/sos/voter_registration/voterRegistrationWelcome.action')
  ,('Alaska' , 'AK', 'https://voterregistration.alaska.gov/')
  ,('Arizona' , 'AZ', 'https://servicearizona.com/webapp/evoter/selectLanguage')
  ,('Arkansas' , 'AR', 'https://vote.gov/register/ar/')
  ,('California' , 'CA', 'https://registertovote.ca.gov/')
  ,('Colorado' , 'CO', 'https://www.sos.state.co.us/voter/pages/pub/home.xhtml')
  ,('Connecticut' , 'CT', 'https://voterregistration.ct.gov/OLVR/welcome.do')
  ,('Delaware' , 'DE', 'https://ivote.de.gov/VoterView/')
  ,('Florida' , 'FL', 'https://registertovoteflorida.gov/home')
  ,('Georgia' , 'GA', 'https://registertovote.sos.ga.gov/GAOLVR/welcome.do#no-back-button')
  ,('Hawaii' , 'HI', 'https://olvr.hawaii.gov/')
  ,('Idaho' , 'ID', 'https://apps.idahovotes.gov/OnlineVoterRegistration')
  ,('Illinois' , 'IL', 'https://ova.elections.il.gov/')
  ,('Indiana' , 'IN', 'https://indianavoters.in.gov/')
  ,('Iowa' , 'IA', 'https://sos.iowa.gov/elections/voterinformation/voterregistration.html')
  ,('Kansas' , 'KS', 'https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx')
  ,('Kentucky' , 'KY', 'https://vrsws.sos.ky.gov/ovrweb/')
  ,('Louisiana' , 'LA', 'https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx')
  ,('Maine' , 'ME', 'https://vote.gov/register/me/')
  ,('Maryland' , 'MD', 'https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1')
  ,('Massachusetts' , 'MA', 'https://www.sec.state.ma.us/ovr/')
  ,('Michigan' , 'MI', 'https://mvic.sos.state.mi.us/registervoter')
  ,('Minnesota' , 'MN', 'https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationMain.aspx')
  ,('Mississippi' , 'MS', 'https://vote.gov/register/ms/')
  ,('Missouri' , 'MO', 'https://www.sos.mo.gov/elections/goVoteMissouri/register?ref=voteusa')
  ,('Montana' , 'MT', 'https://vote.gov/register/mt/')
  ,('Nebraska' , 'NE', 'https://www.nebraska.gov/apps-sos-voter-registration/?ref=voteusa')
  ,('Nevada' , 'NV', 'https://www.nvsos.gov/sosvoterservices/Registration/Step0.aspx')
  ,('New Hampshire' , 'NH', 'http://sos.nh.gov/Elections.aspx')
  ,('New Jersey' , 'NJ', 'https://vote.gov/register/nj/')
  ,('New Mexico' , 'NM', 'https://portal.sos.state.nm.us/OVR/(S(4hlbisjwvitf2uufzogfckge))/WebPages/InstructionsStep1.aspx')
  ,('New York' , 'NY', 'https://dmv.ny.gov/more-info/electronic-voter-registration-application')
  ,('North Carolina' , 'NC', 'https://vote.gov/register/nc/')
  ,('North Dakota' , 'ND', 'https://vip.sos.nd.gov/PortalList.aspx')
  ,('Ohio' , 'OH', 'https://olvr.ohiosos.gov/')
  ,('Oklahoma' , 'OK', 'https://vote.gov/register/ok/')
  ,('Oregon' , 'OR', 'https://secure.sos.state.or.us/orestar/vr/register.do')
  ,('Pennsylvania' , 'PA', 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx')
  ,('Rhode Island' , 'RI', 'https://vote.sos.ri.gov/')
  ,('South Carolina' , 'SC', 'https://info.scvotes.sc.gov/eng/ovr/start.aspx')
  ,('South Dakota' , 'SD', 'https://vote.gov/register/sd/')
  ,('Tennessee' , 'TN', 'https://ovr.govote.tn.gov/')
  ,('Texas' , 'TX', 'https://vote.gov/register/tx/')
  ,('Utah' , 'UT', 'https://secure.utah.gov/voterreg/index.html')
  ,('Vermont' , 'VT', 'https://olvr.sec.state.vt.us/')
  ,('Virginia' , 'VA', 'https://vote.elections.virginia.gov/Registration/Eligibility')
  ,('Washington' , 'WA', 'https://voter.votewa.gov/WhereToVote.aspx')
  ,('West Virginia' , 'WV', 'https://ovr.sos.wv.gov/Register/Landing')
  ,('Wisconsin' , 'WI', 'https://myvote.wi.gov/en-us/RegisterToVote/ref/voteusa')
  ,('Wyoming' , 'WY', 'https://soswy.state.wy.us/Elections/RegisteringToVote.aspx');

