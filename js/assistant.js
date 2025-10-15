// Assistant page: returns HTML and sets up interactions
(function(){
  function assistantMarkup(){
    return `
      <h1 class="page-title">🤖 dfYOUNG AI Agent Experience</h1>
      <p class="page-subtitle">Conversational AI that thinks, acts, and collaborates with you</p>

      <div class="card assistant">
        <div class="header">
          <h2>AI Agent Workflows</h2>
          <p>Explore 6 common logistics scenarios. Click a tab to see the end-to-end agent flow.</p>
        </div>

        <div class="workflow-tabs">
          <div class="tab active" data-workflow="standard">📦 Standard</div>
          <div class="tab" data-workflow="temp-controlled">❄️ Temp-Controlled</div>
          <div class="tab" data-workflow="white-glove">🎨 White Glove</div>
          <div class="tab" data-workflow="international">🌍 International</div>
          <div class="tab" data-workflow="emergency">⚡ Emergency</div>
          <div class="tab" data-workflow="project">🗃️ Project</div>
        </div>

        <div class="content-area">
          ${assistantSections.standard}
          ${assistantSections.temp}
          ${assistantSections.whiteglove}
          ${assistantSections.international}
          ${assistantSections.emergency}
          ${assistantSections.project}
        </div>
      </div>
    `;
  }

  // ==================== COPY FROM HERE ====================
  const assistantSections = {
    standard: `
    <div class="workflow-content active" id="standard">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">📝 Step 1: Quote Request</div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">I need to ship 500 lbs of electronics from Los Angeles to New York. Can you give me a quote?</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Analysis Started</div>
                <div class="agent-action-body">
                  <strong>I'm analyzing your request:</strong><br>
                  ✓ Reviewing your shipping history (47 shipments to East Coast)<br>
                  ✓ Checking current carrier rates across 12 providers<br>
                  ✓ Evaluating weather patterns for LA-NY routes<br>
                  ✓ Calculating optimal delivery windows
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Based on your history, you typically prefer 3-5 day delivery windows for electronics. I'm pre-filtering options that balance cost and reliability based on your past preferences.</div>
                </div>
              </div>
              I'd be happy to help! Let me gather a few details to optimize your quote:
              <div class="agent-action input-needed">
                <div class="agent-action-header">❓ Input Needed</div>
                <div class="agent-action-body"><strong>Quick questions:</strong><br>• When do you need this delivered?<br>• What's the approximate value of the electronics?<br>• Any special handling requirements?</div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Need it there within 5 days. Value is around $15,000. Standard packaging should be fine.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action</div>
                <div class="agent-action-body">
                  <strong>Multi-factor optimization complete:</strong><br>
                  ✓ Analyzed 50+ route combinations<br>
                  ✓ Applied your 15% volume discount (auto-detected)<br>
                  ✓ Identified weather risk: Chicago route (snow Day 3)<br>
                  ✓ Automatically rerouted via southern corridor<br>
                  ✓ Calculated carbon offset options
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Your 5-day window allows ground shipping, saving $340 vs. air. I've detected snow forecast in Chicago and pre-emptively selected the southern route to maintain your 4-day delivery guarantee with 95% confidence.</div>
                </div>
              </div>
              Perfect! I've found 3 optimized options:
              <div class="options">
                <div class="option">
                  <div class="option-title">✅ Recommended: Ground Freight (Southern Route)</div>
                  <div class="option-details"><strong>$680</strong> • Arrives in 4 days • 15% discount applied<br>$15K insurance included • Carbon offset included • Weather-optimized route</div>
                </div>
                <div class="option">
                  <div class="option-title">Air Freight Express</div>
                  <div class="option-details"><strong>$1,020</strong> • Arrives in 2 days • Standard insurance<br>Premium service • Faster but higher cost</div>
                </div>
                <div class="option">
                  <div class="option-title">Economy Ground</div>
                  <div class="option-details"><strong>$520</strong> • Arrives in 5-6 days • Basic insurance<br>Budget option • Uses Chicago route (weather risk)</div>
                </div>
              </div>
              ⚠️ <strong>Proactive alert:</strong> I've rerouted the recommended option through the southern corridor to avoid snow in Chicago. Your delivery date remains guaranteed for Tuesday, 2:00 PM.
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Great! Let's go with the recommended ground option.</div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 2: Intelligent Booking</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action</div>
                <div class="agent-action-body">
                  <strong>Auto-filling from your profile:</strong><br>
                  ✓ Pickup: 1234 Commerce St, LA (your primary warehouse)<br>
                  ✓ Delivery: 567 Broadway, NYC (used in last 3 shipments)<br>
                  ✓ Packaging: Standard palletized (your preference)<br>
                  ✓ Insurance: $15,000 coverage<br>
                  ✓ Payment: Visa ••••4532<br>
                  ✓ Scheduled pickup: Tomorrow 10 AM (your typical window)
                  <div class="reasoning">💭 <strong>Reasoning:</strong> I've learned your preferences from 47 previous shipments. Your warehouse typically has availability 9 AM-12 PM, so I've scheduled for 10 AM. Driver John M. (4.9★) has your location memorized from previous pickups.</div>
                </div>
              </div>
              <div class="agent-action confirmation">
                <div class="agent-action-header">✅ Confirm Booking</div>
                <div class="agent-action-body">
                  <strong>Booking summary:</strong><br>
                  • Pickup: Tomorrow (Nov 12) at 10:00 AM<br>
                  • Total: $680 (15% discount applied)<br>
                  • Delivery: Tuesday, Nov 16 by 2:00 PM<br>
                  • Route: Southern corridor (weather-optimized)
                  <div class="button-group">
                    <button class="btn btn-primary">✓ Confirm Booking</button>
                    <button class="btn btn-secondary">Edit Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Confirmed!</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Booking confirmed: Tracking <strong>DFY-2847392</strong><br>
                  ✓ Driver John M. (4.9★) dispatched with extra padding for electronics<br>
                  ✓ SMS pickup reminder scheduled (tomorrow 9:30 AM)<br>
                  ✓ Insurance certificate generated and emailed<br>
                  ✓ Real-time GPS tracking activated<br>
                  ✓ Delivery notifications configured<br>
                  ✓ Your account manager notified
                </div>
              </div>
              🎉 <strong>All set!</strong> Your tracking number is <strong>DFY-2847392</strong>. I'll send proactive updates and monitor your shipment continuously.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚚 Step 3: Proactive Monitoring</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action</div>
                <div class="agent-action-body">
                  <strong>Real-time optimization:</strong><br>
                  ✓ Monitoring: GPS location, traffic, weather, driver performance<br>
                  ✓ Detected: Traffic delay in Phoenix (45 min)<br>
                  ✓ Action: Adjusted route through Tucson<br>
                  ✓ Result: Maintained Tuesday 2:00 PM delivery window
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Traffic incident detected on I-10. I immediately rerouted through Tucson, adding only 12 minutes vs. the 45-minute delay. Your shipment is still ahead of schedule.</div>
                </div>
              </div>
              📍 <strong>Shipment update:</strong> Currently in Albuquerque, NM. Ahead of schedule! Expected delivery: Tuesday 2:15 PM (15 minutes early).
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery & Optimization</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action</div>
                <div class="agent-action-body">
                  <strong>Delivery completed at 2:15 PM:</strong><br>
                  ✓ Photo confirmation captured and sent<br>
                  ✓ Digital signature obtained<br>
                  ✓ Invoice generated<br>
                  ✓ Analyzing shipment data for future optimization...
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Analyzing your last 6 months: 47 shipments to East Coast, average 3-4/month to NYC, most with 2-5 day flexibility. I've identified a 76% cost-saving opportunity through consolidation.</div>
                </div>
              </div>
              ✅ <strong>Delivered!</strong> Package arrived at 2:15 PM.
              <div class="agent-action confirmation">
                <div class="agent-action-header">💡 Cost Optimization Identified</div>
                <div class="agent-action-body">
                  <strong>Consolidation opportunity:</strong><br><br>
                  I analyzed your shipping patterns and found:<br>
                  • You ship to NYC 3-4 times/month<br>
                  • Most shipments have 2-5 day flexibility<br>
                  • Consolidating could save <strong>76%</strong><br><br>
                  <strong>Current:</strong> 3 shipments = $1,170/month<br>
                  <strong>Consolidated:</strong> 1 shipment = $280/month<br>
                  <strong>💵 Savings: $890/month = $10,680/year</strong><br>
                  <strong>🌱 Carbon reduction: 34%</strong><br><br>
                  Free 14-day storage at our LA facility.<br><br>
                  <strong>Set up automatic consolidation?</strong>
                  <div class="button-group">
                    <button class="btn btn-primary">Yes, Optimize My Shipments</button>
                    <button class="btn btn-secondary">Tell Me More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Yes! Set it up.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Consolidation program activated<br>
                  ✓ LA warehouse storage allocated (14-day free)<br>
                  ✓ Auto-consolidation triggers configured<br>
                  ✓ Monthly savings dashboard created<br>
                  ✓ Account manager notified<br>
                  ✓ First consolidated shipment scheduled for Nov 25
                </div>
              </div>
              🎉 <strong>Done!</strong> Your consolidation plan is active. I'll automatically suggest consolidation when detecting multiple shipments to the same region. <strong>Projected annual savings: $10,680</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">8</div><div class="metric-label">Autonomous Actions</div></div>
        <div class="metric-item"><div class="metric-value">$10.7K</div><div class="metric-label">Annual Savings</div></div>
        <div class="metric-item"><div class="metric-value">95%</div><div class="metric-label">Delivery Accuracy</div></div>
        <div class="metric-item"><div class="metric-value">34%</div><div class="metric-label">Carbon Reduction</div></div>
      </div>
    </div>
    `,
    
    temp: `
    <div class="workflow-content" id="temp-controlled">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🔍 Step 1: Critical Shipment Detection</div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">I need to ship temperature-sensitive vaccines from Boston to Miami. They must stay between 2-8°C.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Critical Protocol Activated</div>
                <div class="agent-action-body">
                  <strong>Pharmaceutical cold chain requirements detected:</strong><br>
                  ✓ Activated FDA-compliant protocol<br>
                  ✓ Filtering for carriers with 99%+ pharma compliance<br>
                  ✓ Checking active temp monitoring systems<br>
                  ✓ Validating backup cooling requirements<br>
                  ✓ Weather analysis: Miami 95°F forecast (high risk)<br>
                  ✓ Calculating Phase 22 gel pack requirements
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Vaccines = FDA compliance mandatory. Miami's 95°F forecast creates high-risk scenario. I'm pre-selecting only carriers with IoT monitoring (30-sec intervals), redundant cooling, and 100% on-time pharma records. Zero tolerance for temperature excursions.</div>
                </div>
              </div>
              I understand this is critical. Let me gather compliance details:
              <div class="agent-action input-needed">
                <div class="agent-action-header">❓ Compliance Requirements</div>
                <div class="agent-action-body"><strong>Required for FDA compliance:</strong><br>• Total weight/volume?<br>• FDA documentation needed?<br>• Delivery timeline?<br>• Clinical trial or hospital distribution?</div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">200 lbs, yes FDA docs needed, 48 hours, hospital distribution.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions</div>
                <div class="agent-action-body">
                  ✓ Identified 3 FDA-certified carriers with perfect pharma records<br>
                  ✓ Calculated gel pack requirements: Phase 22 (96-hour stability at 95°F)<br>
                  ✓ Pre-generated: Commercial invoice, packing list, temp logs, chain of custody<br>
                  ✓ Validated: All carriers have IoT sensors (30-sec monitoring)<br>
                  ✓ Confirmed: Redundant cooling + backup generators<br>
                  ✓ Identified: Backup cold storage facility in Jacksonville (if needed)
                  <div class="reasoning">💭 <strong>Reasoning:</strong> With 95°F Miami weather and vaccines, I'm recommending the premium carrier with 100% on-time pharma delivery and triple-redundant cooling. The $200 premium eliminates all risk. I've also pre-positioned a backup facility in Jacksonville in case of emergency rerouting.</div>
                </div>
              </div>
              Perfect. Here's your optimized solution:
              <div class="options">
                <div class="option">
                  <div class="option-title">✅ Recommended: Premium Cold Chain Express</div>
                  <div class="option-details"><strong>$1,450</strong> • Arrives in 36 hours • 100% pharma on-time record<br>IoT monitoring (30-sec) • Triple-redundant cooling • FDA docs included • Backup facility pre-positioned</div>
                </div>
              </div>
              ⚠️ <strong>Critical prep:</strong> Miami 95°F forecast. I recommend pre-cooling container 4 hours before pickup + Phase 22 gel packs (driver will bring them).
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Let's book it.</div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 2: Autonomous Prep & Documentation</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Booking confirmed: <strong>DFY-COLD-8392</strong><br>
                  ✓ IoT sensors assigned (Sensors #4721, #4722 - 30-sec monitoring)<br>
                  ✓ FDA documents auto-generated: Commercial invoice, packing list, temp logs, chain of custody<br>
                  ✓ Driver briefed on vaccine handling protocol<br>
                  ✓ Phase 22 gel packs allocated and loaded<br>
                  ✓ Backup facility in Jacksonville pre-positioned (if emergency rerouting needed)<br>
                  ✓ Pre-pickup checklist sent to your email<br>
                  ✓ Temperature alert thresholds set: ±0.5°C
                  <div class="reasoning">💭 <strong>Reasoning:</strong> All compliance documentation auto-generated to save you time. I've configured ultra-sensitive alerts (±0.5°C) to catch any drift early. Backup facility ensures we have contingency options if any issues arise during transit.</div>
                </div>
              </div>
              🎉 <strong>Confirmed!</strong> Tracking: <strong>DFY-COLD-8392</strong><br><br>
              📋 <strong>Pre-pickup checklist (sent to email):</strong><br>
              • Pre-cool container to 4°C (4 hours before pickup)<br>
              • Verify vaccine packaging seals intact<br>
              • Have temperature logs ready<br><br>
              Pickup: Tomorrow 8:00 AM. I'll monitor temperature continuously and alert you immediately to any deviations >0.5°C.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚚 Step 3: Real-Time Temperature Monitoring</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Pickup Validation</div>
                <div class="agent-action-body">
                  <strong>Temperature validation at pickup:</strong><br>
                  ✓ Initial temp: 4.2°C (optimal)<br>
                  ✓ IoT sensors activated and transmitting<br>
                  ✓ Gel packs: -18°C (perfect)<br>
                  ✓ Container seal verified<br>
                  ✓ Predictive analysis: 99.7% confidence of staying within 2-8°C for entire transit
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Perfect initial conditions. Based on transit time (36 hrs), external temps, gel pack performance, and cooling system capacity, my predictive model shows 99.7% confidence of maintaining temperature compliance throughout delivery.</div>
                </div>
              </div>
              ✅ <strong>Pickup complete!</strong> Initial temp: 4.2°C (optimal). All systems active. Real-time monitoring engaged.
            </div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Proactive Intervention</div>
                <div class="agent-action-body">
                  <strong>⚠️ Temperature trend detected:</strong><br>
                  • Current: 5.2°C (rising from 4.8°C)<br>
                  • Cause: Traffic delay in Atlanta (45 min exposure)<br>
                  • <strong>Action taken:</strong> Increased cooling power by 15%<br>
                  • <strong>Result:</strong> Temperature stabilized at 4.9°C<br>
                  • Backup facility in Jacksonville remains on standby
                  <div class="reasoning">💭 <strong>Reasoning:</strong> IoT sensors detected upward trend before exceeding safe range. I immediately increased cooling power to counteract the extended exposure from traffic. Proactive intervention prevented any compliance violation. Backup facility ready if situation worsens, but current trajectory is safe.</div>
                </div>
              </div>
              📊 <strong>Temperature update:</strong> Brief rise detected due to Atlanta traffic, but I've adjusted cooling. Temp now stable at 4.9°C. All systems optimal. No intervention needed from you.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery & Compliance</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Delivered to Miami Hospital at 3:45 PM<br>
                  ✓ Temperature compliance: 100% within 2-6°C range (avg: 4.7°C)<br>
                  ✓ FDA-compliant temperature logs auto-generated<br>
                  ✓ Chain of custody documentation completed<br>
                  ✓ Digital signatures obtained<br>
                  ✓ Compliance certificates sent to your email<br>
                  ✓ Audit-ready report generated<br>
                  ✓ Hospital receiving team briefed on storage requirements
                </div>
              </div>
              🎉 <strong>Delivered!</strong> Vaccines arrived safely at 3:45 PM.<br><br>
              📊 <strong>Compliance Summary:</strong><br>
              • Temperature: 100% within 2-6°C (avg 4.7°C)<br>
              • FDA documentation: Complete and audit-ready<br>
              • Zero temperature excursions<br>
              • All certificates sent to your email
            </div>
          </div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">100%</div><div class="metric-label">Temp Compliance</div></div>
        <div class="metric-item"><div class="metric-value">$0</div><div class="metric-label">Product Loss</div></div>
        <div class="metric-item"><div class="metric-value">30 sec</div><div class="metric-label">Monitoring Interval</div></div>
        <div class="metric-item"><div class="metric-value">1</div><div class="metric-label">Proactive Intervention</div></div>
      </div>
    </div>
    `,
// ==================== PART 2: WHITE GLOVE + INTERNATIONAL ====================
    whiteglove: `
    <div class="workflow-content" id="white-glove">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🔍 Step 1: High-Value Assessment</div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">I need to transport a $2M sculpture from our New York gallery to a museum in Los Angeles. It's extremely fragile and irreplaceable.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - White Glove Protocol</div>
                <div class="agent-action-body">
                  <strong>High-value item detected:</strong> $2M sculpture + fragile + irreplaceable<br>
                  ✓ Activated white glove protocol<br>
                  ✓ Filtering for art-certified carriers only (3 qualified)<br>
                  ✓ Checking climate-controlled truck availability<br>
                  ✓ Reviewing art handling team certifications<br>
                  ✓ Preparing comprehensive insurance quotes up to $5M
                  <div class="reasoning">💭 <strong>Reasoning:</strong> $2M + fragile + irreplaceable requires specialized art handling team, custom crating, climate-controlled transport, vibration dampening, and comprehensive insurance. I'm filtering for carriers with fine arts certification and zero-damage records on high-value items.</div>
                </div>
              </div>
              I understand the critical nature of this shipment. Let me design a custom solution:
              <div class="agent-action input-needed">
                <div class="agent-action-header">❓ Custom Handling Details</div>
                <div class="agent-action-body"><strong>For custom handling plan:</strong><br>• Dimensions and weight?<br>• Environmental requirements (temp/humidity)?<br>• Timeline?<br>• Access restrictions at either location?</div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">8 feet tall, 600 lbs. Needs 65-72°F, 45-55% humidity. 5 days timeline. Both locations have narrow doorways and stairs.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions</div>
                <div class="agent-action-body">
                  ✓ Custom crate design: 8.5'×3'×3' with vibration dampening<br>
                  ✓ 4-person art-certified team assigned (Sarah K., 15 yrs experience)<br>
                  ✓ Climate-controlled truck reserved (constant 68°F, 50% humidity)<br>
                  ✓ $5M insurance coverage arranged<br>
                  ✓ Route optimized to avoid rough roads/construction<br>
                  ✓ Specialized dolly equipment identified for stairs<br>
                  ✓ 3D transport simulation created for clearance validation<br>
                  ✓ AR site assessment scheduled
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Narrow doorways + stairs = high-risk logistics. I'm creating a 3D simulation to validate clearances and identify obstacles before arrival. AR walkthrough will confirm exact measurements and approach angles to prevent any surprises on moving day.</div>
                </div>
              </div>
              Perfect. Here's your comprehensive solution:
              <div class="options">
                <div class="option">
                  <div class="option-title">✅ Custom White Glove Service</div>
                  <div class="option-details"><strong>$8,500</strong> • 4-day transit • Art-certified team (Sarah K. lead)<br>Custom crating • Climate-controlled • $5M insurance • Installation included • AR site assessment</div>
                </div>
              </div>
              <div class="agent-action confirmation">
                <div class="agent-action-header">✅ Next Step</div>
                <div class="agent-action-body">
                  <strong>I'd like to schedule an AR site assessment</strong> to review access points and finalize the movement plan. Can we do a video walkthrough tomorrow?
                  <div class="button-group">
                    <button class="btn btn-primary">Schedule Assessment</button>
                    <button class="btn btn-secondary">View 3D Plan First</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Let's do the assessment now.</div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📱 Step 2: AR Assessment & Planning</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - AR Analysis</div>
                <div class="agent-action-body">
                  <strong>AR measurements from video walkthrough:</strong><br>
                  ✓ Pickup doorway: 36" (crate: 34") → ✅ 2" clearance confirmed<br>
                  ✓ Staircase: 12 steps, 45° angle → Specialized dolly required<br>
                  ✓ Delivery doorway: 40" → ✅ Adequate clearance<br>
                  ✓ Museum loading dock access validated<br>
                  ✓ Security protocols documented<br>
                  ✓ Optimal approach angles calculated
                  <div class="reasoning">💭 <strong>Reasoning:</strong> AR analysis validates all clearances and confirms stair challenge. I'm briefing the team on exact measurements and have identified the precise dolly angle needed for the 45° staircase. Security check-in procedures at museum have been added to the timeline.</div>
                </div>
              </div>
              ✅ <strong>Assessment complete!</strong> All clearances validated. Stairs require our specialized art dolly (team will bring). Museum security procedures documented.
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Perfect. Let's book it.</div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 3: Booking & Documentation</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Booking confirmed: <strong>DFY-WG-9284</strong><br>
                  ✓ Sarah K.'s team (15 yrs art handling) scheduled tomorrow 9 AM<br>
                  ✓ Custom crate materials ordered (arriving tonight)<br>
                  ✓ Climate-controlled truck reserved (68°F, 50% humidity)<br>
                  ✓ $5M insurance policy activated<br>
                  ✓ 360° digital documentation system prepared<br>
                  ✓ Museum delivery appointment confirmed (Friday 2 PM)<br>
                  ✓ Blockchain verification system configured
                </div>
              </div>
              🎉 <strong>Confirmed!</strong> Tracking: <strong>DFY-WG-9284</strong><br><br>
              Tomorrow 9:00 AM: Sarah K.'s team arrives to build custom crate on-site and complete 360° condition documentation.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📸 Step 4: Professional Packing & Documentation</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Digital Documentation</div>
                <div class="agent-action-body">
                  <strong>Comprehensive condition documentation:</strong><br>
                  ✓ 52 high-resolution images (360° coverage)<br>
                  ✓ Pre-existing condition noted: Minor scratch on base (documented 10:23 AM)<br>
                  ✓ Blockchain-verified condition report created<br>
                  ✓ Digital signatures from both parties obtained<br>
                  ✓ Custom crate built with vibration dampening<br>
                  ✓ Climate control activated: 68°F, 50% humidity
                  <div class="reasoning">💭 <strong>Reasoning:</strong> 360° photo documentation with blockchain verification provides immutable proof of condition. This protects both parties legally and creates an audit trail for insurance. Any claims can be immediately validated against timestamped, tamper-proof records.</div>
                </div>
              </div>
              ✅ <strong>Packing complete!</strong> Sculpture secured in custom crate with climate control active. All documentation sent to your email. Loading onto truck now.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚚 Step 5: Transit Monitoring</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Route Optimization</div>
                <div class="agent-action-body">
                  <strong>⚠️ Vibration spike detected on I-40:</strong><br>
                  • Vibration level: 0.8G (safe threshold: 0.5G)<br>
                  • <strong>Action taken:</strong> Rerouted to smoother highway via I-44<br>
                  • Impact: +45 minutes to ETA<br>
                  • Climate: 68°F, 50% humidity (optimal)<br>
                  • Vibration: Now 0.3G (well within safe range)
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Multi-sensor monitoring detected vibration exceeding safe thresholds for fragile art. I immediately rerouted to protect the sculpture, prioritizing safety over speed. For irreplaceable items, zero risk tolerance is appropriate even with time penalty.</div>
                </div>
              </div>
              📊 <strong>Transit update:</strong> Detected excessive vibration on planned route. Rerouted to smoother highway (+45 min). Your sculpture's safety is the priority. All other parameters optimal.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 6: Delivery & AI Verification</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Delivered to LA museum at 2:15 PM<br>
                  ✓ Uncrated and positioned per museum specs<br>
                  ✓ AI damage detection: 100% match with pre-transport condition<br>
                  ✓ Pixel-by-pixel analysis: Zero new damage detected<br>
                  ✓ 58 post-delivery photos captured and analyzed<br>
                  ✓ Museum curator sign-off obtained<br>
                  ✓ Insurance-grade delivery report generated<br>
                  ✓ Blockchain verification completed
                  <div class="reasoning">💭 <strong>Reasoning:</strong> AI image analysis compared 52 pre-transport photos against 58 post-delivery photos using pixel-level comparison. Zero discrepancies detected, confirming perfect condition maintenance. This provides definitive proof for insurance and complete peace of mind.</div>
                </div>
              </div>
              🎉 <strong>Delivered!</strong> Your sculpture successfully installed at the museum with zero damage. AI analysis confirms 100% condition match. Museum curator has signed off. All documentation in your inbox.
            </div>
          </div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">0</div><div class="metric-label">Damage Incidents</div></div>
        <div class="metric-item"><div class="metric-value">100%</div><div class="metric-label">Condition Match</div></div>
        <div class="metric-item"><div class="metric-value">110</div><div class="metric-label">Photos Analyzed</div></div>
        <div class="metric-item"><div class="metric-value">1</div><div class="metric-label">Route Optimization</div></div>
      </div>
    </div>
    `,
    
    international: `
    <div class="workflow-content" id="international">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🔍 Step 1: Complex International Analysis</div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">I need to ship electronics components from Shanghai to our Chicago facility. What are my options?</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Multi-Modal Analysis</div>
                <div class="agent-action-body">
                  <strong>Analyzing 50+ route combinations:</strong><br>
                  ✓ Evaluating: Ocean freight, air cargo, rail, trucking<br>
                  ✓ Checking: Current port congestion (LA: 3 days, Seattle: 1 day)<br>
                  ✓ Analyzing: Carrier schedules and reliability ratings<br>
                  ✓ Calculating: Customs clearance times by port<br>
                  ✓ Monitoring: International trade regulations and tariffs
                  <div class="reasoning">💭 <strong>Reasoning:</strong> International shipments require optimizing across cost, speed, and reliability through multiple transport modes. I'm analyzing current conditions at all major ports to find the fastest, most reliable path. Seattle has less congestion than LA currently.</div>
                </div>
              </div>
              Let me optimize your international shipment:
              <div class="agent-action input-needed">
                <div class="agent-action-header">❓ Details Needed</div>
                <div class="agent-action-body"><strong>For optimal routing:</strong><br>• Target delivery date?<br>• Total weight and value?<br>• HS codes for customs? (I can identify if needed)<br>• One-time or recurring shipment?</div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Need it in 3 weeks. 5,000 lbs, $80K value. Don't have HS codes. This will be monthly going forward.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions</div>
                <div class="agent-action-body">
                  ✓ HS Code identified: 8542.39 (electronic integrated circuits)<br>
                  ✓ Trade agreement analysis: USMCA eligibility confirmed<br>
                  ✓ Tariff calculation: $2,340 (saved $890 via USMCA)<br>
                  ✓ Optimal route: Ocean to Seattle + Rail to Chicago (19 days)<br>
                  ✓ All 12 customs forms auto-generated<br>
                  ✓ Pre-clearance application submitted<br>
                  ✓ Monthly program eligibility detected (15% discount available)
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Ocean+Rail via Seattle is 40% cheaper than air and meets your 3-week timeline. Seattle port has less congestion than LA (1 day vs 3 days). Since this is recurring monthly, I'm recommending our program which includes pre-clearance and 15% volume discount, saving $7,560 annually.</div>
                </div>
              </div>
              Perfect! Here's your optimized solution:
              <div class="options">
                <div class="option">
                  <div class="option-title">✅ Recommended: Ocean + Rail (via Seattle)</div>
                  <div class="option-details"><strong>$4,200</strong> • 19 days • Ocean to Seattle (16d) + Rail to Chicago (3d)<br>40% cheaper than air • Less congestion • All customs docs included • USMCA savings applied</div>
                </div>
                <div class="option">
                  <div class="option-title">Air Freight Direct</div>
                  <div class="option-details"><strong>$12,800</strong> • 5 days • Direct to Chicago<br>Fastest option • Premium cost</div>
                </div>
              </div>
              <div class="agent-action confirmation">
                <div class="agent-action-header">💡 Monthly Program Recommendation</div>
                <div class="agent-action-body">
                  <strong>Since this is recurring monthly, I recommend:</strong><br>
                  • 15% volume discount ($3,570/shipment vs $4,200)<br>
                  • Pre-clearance for faster customs<br>
                  • Dedicated account manager<br>
                  • Predictable monthly schedule<br>
                  <strong>Annual savings: $7,560</strong><br><br>
                  Enroll in monthly program?
                  <div class="button-group">
                    <button class="btn btn-primary">Yes, Enroll Monthly</button>
                    <button class="btn btn-secondary">Just This Shipment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Yes, enroll me!</div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 2: Customs Automation</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Monthly program activated (15% discount applied)<br>
                  ✓ 12 customs documents auto-generated and cross-validated:<br>
                  &nbsp;&nbsp;• Commercial invoice, Bill of Lading, Packing list<br>
                  &nbsp;&nbsp;• Certificate of Origin (USMCA), ISF filing<br>
                  &nbsp;&nbsp;• Customs bond, Entry summary, Importer Security Filing<br>
                  ✓ HS Code 8542.39 applied with USMCA benefits<br>
                  ✓ Estimated duties: $2,340 (saved $890 via trade agreement)<br>
                  ✓ Digital copies sent to brokers in Shanghai and Seattle<br>
                  ✓ Pre-clearance application submitted<br>
                  ✓ Next 11 monthly shipments pre-scheduled
                </div>
              </div>
              🎉 <strong>Confirmed!</strong> Tracking: <strong>DFY-INTL-7392</strong><br><br>
              All customs documentation complete. Container pickup in Shanghai tomorrow. Vessel departs Nov 15, arrives Seattle Dec 1, Chicago Dec 4.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚢 Step 3: Predictive Port Analytics</div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Can you give me an update on the shipment?</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Predictive Analytics</div>
                <div class="agent-action-body">
                  <strong>Real-time tracking analysis:</strong><br>
                  ✓ Vessel location: 850 miles from Seattle Port<br>
                  ✓ Current Seattle congestion: 1.2-day average (better than LA's 3 days)<br>
                  ✓ Weather conditions: Optimal<br>
                  ✓ Predicted arrival: Dec 1, 6:00 AM (96% confidence)<br>
                  ✓ Customs pre-clearance: Approved (saves 2 days)<br>
                  ✓ Rail connection: Pre-booked for Dec 1, 2:00 PM departure
                  <div class="reasoning">💭 <strong>Reasoning:</strong> I'm monitoring vessel GPS, port congestion data, weather patterns, and rail schedules in real-time. Pre-clearance approval means your container will bypass standard customs queues, saving 2 days. Rail connection is already secured to avoid any delays at the port.</div>
                </div>
              </div>
              📍 <strong>Your shipment (DFY-INTL-7392):</strong><br>
              • Currently: 850 miles from Seattle<br>
              • Vessel on schedule (96% confidence)<br>
              • Customs pre-cleared (saves 2 days)<br>
              • Rail connection secured for Dec 1<br>
              • Expected Chicago arrival: Dec 4, 10:00 AM
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery & Future Optimization</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Delivered to Chicago facility Dec 4, 9:45 AM<br>
                  ✓ All customs documentation filed and archived<br>
                  ✓ Duties paid: $2,340 (USMCA savings applied)<br>
                  ✓ Next monthly shipment auto-scheduled for Dec 15<br>
                  ✓ Analyzing transit data for continuous improvement...
                  <div class="reasoning">💭 <strong>Reasoning:</strong> I'm analyzing this shipment's performance data to optimize future routes. Seattle route performed 2 days faster than LA would have due to lower congestion. I'm locking in this routing for all future monthly shipments.</div>
                </div>
              </div>
              🎉 <strong>Delivered!</strong> Components arrived Dec 4 at 9:45 AM (15 min early).<br><br>
              📊 <strong>Monthly Program Active:</strong><br>
              • Next shipment: Auto-scheduled Dec 15<br>
              • Annual savings: $7,560<br>
              • Seattle route locked in (2 days faster than LA)
            </div>
          </div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">$7.6K</div><div class="metric-label">Annual Savings</div></div>
        <div class="metric-item"><div class="metric-value">12</div><div class="metric-label">Auto-Generated Docs</div></div>
        <div class="metric-item"><div class="metric-value">2 days</div><div class="metric-label">Pre-Clearance Savings</div></div>
        <div class="metric-item"><div class="metric-value">40%</div><div class="metric-label">Cost vs Air</div></div>
      </div>
    </div>
    `,
// ==================== PART 3: EMERGENCY + PROJECT + FOOTER ====================
    emergency: `
    <div class="workflow-content" id="emergency">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🚨 Step 1: Emergency Detection & Response</div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">URGENT! Production line down in Detroit. Need replacement part from Dallas NOW. Losing $50K per hour!</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - EMERGENCY PROTOCOL</div>
                <div class="agent-action-body">
                  <strong>🚨 Critical situation detected:</strong><br>
                  ✓ Emergency protocol activated (bypassed standard queue)<br>
                  ✓ Downtime cost calculated: $50K/hour<br>
                  ✓ Scanning real-time availability: Air freight, dedicated trucks, couriers<br>
                  ✓ Analyzing total cost: Logistics + downtime cost<br>
                  ✓ Next available air flight: 2:30 PM (6 hrs)<br>
                  ✓ Dedicated truck: Available NOW (11 hrs)<br>
                  ✓ Emergency logistics team activated
                  <div class="reasoning">💭 <strong>Reasoning:</strong> At $50K/hour, every minute costs money. Air arrives in 6 hrs ($5,200 logistics + $300K downtime = $305,200 total). Dedicated truck leaves NOW, arrives in 11 hrs ($2,400 logistics + $550K downtime = $552,400 total). Dedicated truck saves $2,800 and still gets you running tonight. Speed matters, but total cost optimization matters more.</div>
                </div>
              </div>
              🚨 <strong>I understand the urgency.</strong> Analyzing fastest options:
              <div class="options">
                <div class="option">
                  <div class="option-title">✈️ Air Freight (Fastest Flight)</div>
                  <div class="option-details"><strong>$5,200</strong> • Next flight 2:30 PM (6 hrs) • Arrives 8:30 PM<br><strong>Total cost:</strong> $5,200 logistics + $300K downtime = <strong>$305,200</strong></div>
                </div>
                <div class="option">
                  <div class="option-title">✅ Recommended: Dedicated Truck</div>
                  <div class="option-details"><strong>$2,400</strong> • Available NOW (leaves in 15 min) • Arrives 9:00 PM (11 hrs)<br><strong>Total cost:</strong> $2,400 logistics + $550K downtime = <strong>$552,400</strong><br>💰 <strong>Saves $2,800 vs air, production restored tonight</strong></div>
                </div>
              </div>
              <div class="agent-action confirmation">
                <div class="agent-action-header">⚡ URGENT - Immediate Response Needed</div>
                <div class="agent-action-body">
                  <strong>My recommendation:</strong> Dedicated truck (leaves NOW, arrives 9 PM tonight)<br>
                  Saves $2,800 vs air while still restoring production tonight. Which option?
                  <div class="button-group">
                    <button class="btn btn-primary">✓ Dedicated Truck</button>
                    <button class="btn btn-secondary">Air Freight</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Book the truck NOW!</div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">⚡ Step 2: Rapid Deployment (45 seconds)</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions - EXECUTED IN 45 SECONDS</div>
                <div class="agent-action-body">
                  ✓ <strong>Booking confirmed: DFY-URGENT-5721</strong><br>
                  ✓ Nearest truck dispatched: Driver John M. (15 mins from Dallas pickup)<br>
                  ✓ All paperwork auto-generated and filed<br>
                  ✓ Pickup scheduled: Dallas facility in 45 minutes<br>
                  ✓ Real-time GPS tracking activated<br>
                  ✓ Direct communication line opened with driver<br>
                  ✓ Stakeholder alerts sent: Plant manager, maintenance lead, operations director<br>
                  ✓ Dynamic routing enabled (live traffic/weather monitoring)<br>
                  ✓ Contingency plans prepared (backup drivers identified)
                </div>
              </div>
              ✅ <strong>BOOKED IN 45 SECONDS!</strong> Tracking: <strong>DFY-URGENT-5721</strong><br><br>
              🚚 <strong>Driver John M. (4.9★)</strong> dispatched - 15 mins from Dallas pickup<br>
              📍 <strong>Pickup:</strong> 10:45 AM (45 minutes from now)<br>
              🎯 <strong>ETA Detroit:</strong> 9:15 PM tonight<br><br>
              Your plant manager, maintenance lead, and operations director have been notified. Updates every 30 minutes.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🛣️ Step 3: Dynamic Route Optimization</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Real-Time Adjustment</div>
                <div class="agent-action-body">
                  <strong>⚠️ Traffic incident detected:</strong><br>
                  • Location: I-35 near Oklahoma City<br>
                  • Impact: 30-minute delay if continuing on I-35<br>
                  • <strong>Action taken:</strong> Rerouted via US-75 immediately<br>
                  • <strong>Result:</strong> Added only 8 minutes (vs 30-min delay)<br>
                  • New ETA: 9:23 PM (still within window)<br>
                  • Driver and customer auto-notified
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Continuous monitoring detected accident on I-35 that would add 30 minutes. By rerouting immediately through US-75, I minimized delay to just 8 minutes. Every minute saved reduces your downtime cost. Proactive intervention beats reactive problem-solving.</div>
                </div>
              </div>
              📍 <strong>Route update:</strong> Accident detected on I-35. Rerouted via US-75. Added only 8 mins (vs 30-min delay). New ETA: 9:23 PM. Still on track! 👍
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery & Impact Analysis</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Part delivered at 9:10 PM (13 minutes early!)<br>
                  ✓ Production line restored by 10:30 PM<br>
                  ✓ Total downtime: 11.5 hours<br>
                  ✓ Business impact analysis auto-generated<br>
                  ✓ ROI report sent to operations director<br>
                  ✓ Post-mortem documentation created
                </div>
              </div>
              🎉 <strong>DELIVERED!</strong> Part arrived 9:10 PM (13 min early). Production restored by 10:30 PM.<br><br>
              📊 <strong>Business Impact Analysis:</strong><br>
              • <strong>Downtime cost avoided:</strong> $65,000 (13 additional hours)<br>
              • <strong>Emergency logistics cost:</strong> $2,400<br>
              • <strong>Net cost avoided:</strong> $62,600<br>
              • <strong>ROI on emergency service:</strong> 2,608%<br><br>
              Your decision to use dedicated truck vs air saved an additional $2,800 while still meeting timeline. Excellent call! 💪
            </div>
          </div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">45 sec</div><div class="metric-label">Booking Time</div></div>
        <div class="metric-item"><div class="metric-value">$62.6K</div><div class="metric-label">Cost Avoided</div></div>
        <div class="metric-item"><div class="metric-value">11 hrs</div><div class="metric-label">Dallas to Detroit</div></div>
        <div class="metric-item"><div class="metric-value">2,608%</div><div class="metric-label">ROI</div></div>
      </div>
    </div>
    `,
    
    project: `
    <div class="workflow-content" id="project">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🔍 Step 1: Complex Project Analysis</div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">We're opening a new Denver office. Need to coordinate moving 50+ workstations, servers, and furniture from SF over 2 weeks. This is complex.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Project Mode Activated</div>
                <div class="agent-action-body">
                  <strong>Multi-phase logistics plan initiated:</strong><br>
                  ✓ Analyzing: IT equipment priority for business continuity<br>
                  ✓ Coordinating: 3 phases with Denver office build-out schedule<br>
                  ✓ Calculating: Volume discounts for bulk coordination<br>
                  ✓ Identifying: Critical path items (servers must arrive first)<br>
                  ✓ Planning: Weekend deliveries to minimize disruption<br>
                  ✓ Estimating: 7 coordinated shipments over 14 days
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Office relocations require phased approach prioritizing critical IT infrastructure first, then workstations, then furniture. This maintains business continuity. I'm creating a master timeline that syncs with your Denver office construction schedule to avoid items arriving before the space is ready.</div>
                </div>
              </div>
              Perfect! This is a complex coordination project. Let me gather details:
              <div class="agent-action input-needed">
                <div class="agent-action-header">❓ Project Details</div>
                <div class="agent-action-body"><strong>To create optimal plan:</strong><br>• When is Denver office space ready?<br>• How many servers/critical IT equipment?<br>• When do employees start working from Denver?<br>• Any items that must move together?</div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Denver space ready Dec 1. We have 10 servers + networking. Employees start Dec 9. Servers and networking must move together.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Master Plan Created</div>
                <div class="agent-action-body">
                  ✓ 7 coordinated shipments planned over 14 days<br>
                  ✓ Phase 1: IT infrastructure (servers + networking) - Dec 1-2 (weekend)<br>
                  ✓ Phase 2: Workstations (50 units) - Dec 4, 6, 8 (3 shipments)<br>
                  ✓ Phase 3: Furniture & supplies - Dec 7, 9 (2 shipments)<br>
                  ✓ All deliveries timed with office build-out completion<br>
                  ✓ Weekend delivery for servers to allow IT setup time<br>
                  ✓ Volume discount calculated: 18% ($4,200 savings)<br>
                  ✓ Dedicated project manager assigned: Sarah Chen
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Servers delivered Dec 1-2 (weekend) gives IT team 7 days to set up before employees arrive Dec 9. Workstations arrive in waves coordinated with desk installation. Furniture arrives last, timed with space completion. This phasing maintains productivity and avoids storage fees for items arriving too early.</div>
                </div>
              </div>
              Excellent! Here's your comprehensive project plan:
              <div class="agent-action confirmation">
                <div class="agent-action-header">📋 Complete Project Plan</div>
                <div class="agent-action-body">
                  <strong>Phase 1 - Critical IT (Dec 1-2 weekend):</strong><br>
                  • 10 servers + networking equipment<br>
                  • Dedicated art-handling team, climate-controlled<br>
                  • Weekend delivery for 7-day setup window<br>
                  • Cost: $5,200<br><br>
                  <strong>Phase 2 - Workstations (Dec 4, 6, 8):</strong><br>
                  • 50 workstations in 3 coordinated shipments<br>
                  • Timed with desk installation schedule<br>
                  • Cost: $8,100 (3 shipments)<br><br>
                  <strong>Phase 3 - Furniture (Dec 7, 9):</strong><br>
                  • Desks, chairs, filing cabinets, supplies<br>
                  • Timed with office space completion<br>
                  • Cost: $5,200 (2 shipments)<br><br>
                  <strong>Total investment:</strong> $18,500<br>
                  <strong>Volume discount savings:</strong> $4,200 (18%)<br>
                  <strong>Dedicated project manager:</strong> Sarah Chen<br><br>
                  <strong>All deliveries coordinated to avoid early arrivals and storage fees.</strong>
                  <div class="button-group">
                    <button class="btn btn-primary">✓ Approve Project Plan</button>
                    <button class="btn btn-secondary">Adjust Timeline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Approved! This looks perfect.</div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 2: Project Kickoff & Coordination</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Project plan locked in: 7 shipments over 14 days<br>
                  ✓ Sarah Chen (project manager) assigned and briefed<br>
                  ✓ All 7 shipments pre-booked and scheduled<br>
                  ✓ Dedicated trucks reserved for each phase<br>
                  ✓ IT team in Denver notified of server arrival Dec 2<br>
                  ✓ Facilities team synced with furniture delivery schedule<br>
                  ✓ Tracking numbers generated for all shipments<br>
                  ✓ Master project dashboard created (real-time updates)<br>
                  ✓ Contingency plans prepared for weather delays
                </div>
              </div>
              🎉 <strong>Project confirmed!</strong> Master tracking: <strong>DFY-PROJ-2847</strong><br><br>
              Sarah Chen (your project manager) will coordinate all phases. You'll receive a master dashboard link for real-time tracking of all 7 shipments.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚚 Step 3: Phase Execution & Real-Time Coordination</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Phase 1 Complete</div>
                <div class="agent-action-body">
                  <strong>Phase 1 (IT Infrastructure) delivered:</strong><br>
                  ✓ All 10 servers delivered Dec 2, 8:00 AM (weekend)<br>
                  ✓ Networking equipment installed by 10:00 AM<br>
                  ✓ IT team has 7 days for setup before employee start<br>
                  ✓ Zero damage, all equipment tested on arrival<br>
                  ✓ Phase 2 (Workstations) on track for Dec 4
                </div>
              </div>
              ✅ <strong>Phase 1 complete!</strong> All servers delivered Dec 2. IT team has 7 days for setup. Phase 2 (workstations) starts Dec 4.
            </div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action - Weather Adjustment</div>
                <div class="agent-action-body">
                  <strong>⚠️ Weather alert detected:</strong><br>
                  • Snow forecast in Denver Dec 6-7<br>
                  • <strong>Action taken:</strong> Moved Dec 6 workstation delivery to Dec 5<br>
                  • <strong>Action taken:</strong> Moved Dec 7 furniture delivery to Dec 8<br>
                  • <strong>Result:</strong> All deliveries remain on schedule, avoiding weather delays<br>
                  • Facilities team notified of schedule adjustment
                  <div class="reasoning">💭 <strong>Reasoning:</strong> Denver snow forecast Dec 6-7 could delay deliveries. By proactively adjusting the schedule (moving Dec 6 shipment forward and Dec 7 shipment back), I've avoided weather disruptions while maintaining the overall project timeline. Your employees still start Dec 9 with everything in place.</div>
                </div>
              </div>
              📊 <strong>Schedule adjustment:</strong> Denver snow forecast detected. I've rescheduled Dec 6-7 deliveries to avoid delays. All items still arrive before Dec 9 employee start date. ✅
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Project Completion & Analysis</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ All 7 shipments delivered successfully<br>
                  ✓ Phase 1 (IT): Delivered Dec 2<br>
                  ✓ Phase 2 (Workstations): Delivered Dec 4, 5, 8<br>
                  ✓ Phase 3 (Furniture): Delivered Dec 8, 9<br>
                  ✓ Zero damage across all shipments<br>
                  ✓ 100% on-time delivery (weather adjusted)<br>
                  ✓ Employees started Dec 9 with fully functional office<br>
                  ✓ Project close-out report generated<br>
                  ✓ Lessons learned documented for future projects
                </div>
              </div>
              🎉 <strong>Project complete!</strong> All 7 shipments delivered successfully.<br><br>
              📊 <strong>Project Summary:</strong><br>
              • Total shipments: 7 (coordinated over 14 days)<br>
              • On-time delivery: 100%<br>
              • Damage incidents: 0<br>
              • Cost savings: $4,200 (18% volume discount)<br>
              • Employee start date: Met (Dec 9, fully operational)<br><br>
              Your Denver office is fully operational! 🎊
            </div>
          </div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">7</div><div class="metric-label">Coordinated Shipments</div></div>
        <div class="metric-item"><div class="metric-value">$4.2K</div><div class="metric-label">Project Savings</div></div>
        <div class="metric-item"><div class="metric-value">100%</div><div class="metric-label">On-Time Delivery</div></div>
        <div class="metric-item"><div class="metric-value">0</div><div class="metric-label">Damage Incidents</div></div>
      </div>
    </div>
    `
  };

  // Public render function
  window.AssistantPage = {
    render() { return assistantMarkup(); },
    attachListeners() {
      const root = document.querySelector('.assistant');
      if (!root) return;

      const tabs = root.querySelectorAll('.tab');
      const panels = root.querySelectorAll('.workflow-content');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          const id = tab.getAttribute('data-workflow');
          const panel = root.querySelector('#' + id);
          if (panel) {
            panel.classList.add('active');
            panel.scrollTop = 0;
          }
        });
      });

      root.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function(){
          this.style.borderColor = '#667eea';
          setTimeout(() => { this.style.borderColor = '#e2e8f0'; }, 300);
        });
      });

      root.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e){
          e.preventDefault();
          this.style.transform = 'scale(0.96)';
          setTimeout(() => { this.style.transform = ''; }, 120);
        });
      });
    }
  };
})();
