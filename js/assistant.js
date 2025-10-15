// Assistant page: returns HTML and sets up interactions
(function(){
  function assistantMarkup(){
    // This markup is adapted from dfyoung_customer_ai_agent.html and scoped under .assistant
    return `
      <div class="page">
        <h1 class="page-title">🤖 AI Assistant</h1>
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
      </div>
    `;
  }

  // Split the heavy content into small template strings for readability
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
                  <div class="reasoning">💭 <strong>Reasoning:</strong> You prefer 3–5 day delivery windows for electronics. Filtering for cost + reliability.</div>
                </div>
              </div>
              I'd be happy to help! A few quick details:
              <div class="agent-action input-needed">
                <div class="agent-action-header">❓ Input Needed</div>
                <div class="agent-action-body"><strong>Quick questions:</strong><br>• Delivery deadline?<br>• Declared value?<br>• Special handling?</div>
              </div>
            </div>
          </div>
          <div class="message user">
            <div class="avatar user">👤</div>
            <div class="message-content">Need it in 5 days. Value ~$15,000. Standard packaging is fine.</div>
          </div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Action</div>
                <div class="agent-action-body">
                  <strong>Optimization complete:</strong><br>
                  ✓ 50+ route combos analyzed<br>
                  ✓ 15% volume discount applied<br>
                  ✓ Weather risk on Chicago route → using southern corridor<br>
                  ✓ Carbon offset options included
                  <div class="reasoning">💭 <strong>Reasoning:</strong> 5-day window enables ground (saves $340 vs air) with 95% on-time confidence.</div>
                </div>
              </div>
              Perfect! Here are 3 options:
              <div class="options">
                <div class="option">
                  <div class="option-title">✅ Recommended: Ground Freight (Southern Route)</div>
                  <div class="option-details"><strong>$680</strong> • 4 days • 15% discount • $15K insurance • Weather-optimized</div>
                </div>
                <div class="option">
                  <div class="option-title">Air Freight Express</div>
                  <div class="option-details"><strong>$1,020</strong> • 2 days • Premium speed</div>
                </div>
                <div class="option">
                  <div class="option-title">Economy Ground</div>
                  <div class="option-details"><strong>$520</strong> • 5–6 days • Uses Chicago route (weather risk)</div>
                </div>
              </div>
              ⚠️ <strong>Proactive alert:</strong> Southern corridor selected to avoid snow. Delivery still guaranteed for Tuesday 2:00 PM.
            </div>
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
                  <strong>Auto-filled from your profile:</strong><br>
                  ✓ Pickup: 1234 Commerce St, LA<br>
                  ✓ Delivery: 567 Broadway, NYC<br>
                  ✓ Packaging: Standard palletized<br>
                  ✓ Insurance: $15,000<br>
                  ✓ Payment: Visa •••• 4532<br>
                  ✓ Pickup: Tomorrow 10 AM (your normal window)
                </div>
              </div>
              <div class="agent-action confirmation">
                <div class="agent-action-header">✅ Confirm Booking</div>
                <div class="agent-action-body">
                  • Pickup: Tomorrow 10:00 AM<br>
                  • Total: $680 (15% discount)<br>
                  • Delivery: Tue by 2:00 PM<br>
                  • Route: Southern corridor
                  <div class="button-group">
                    <button class="btn btn-primary">✓ Confirm Booking</button>
                    <button class="btn btn-secondary">Edit Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">Confirmed!</div></div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Autonomous Actions Completed</div>
                <div class="agent-action-body">
                  ✓ Booking confirmed: Tracking <strong>DFY-2847392</strong><br>
                  ✓ Driver dispatched • SMS reminder scheduled<br>
                  ✓ Insurance cert sent • GPS tracking active
                </div>
              </div>
              🎉 <strong>All set!</strong> Tracking: <strong>DFY-2847392</strong>.
            </div>
          </div>
        </div>

        <div class="message-group">
          <div class="step-indicator">🚚 Step 3: Proactive Monitoring</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Real-time optimization</div>
                <div class="agent-action-body">
                  Traffic delay in Phoenix (45m) → rerouted via Tucson. Delivery window maintained.
                </div>
              </div>
              📍 <strong>Status:</strong> In Albuquerque, ahead of schedule. ETA Tue 2:15 PM.
            </div>
          </div>
        </div>

        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery & Optimization</div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous">
                <div class="agent-action-header">🤖 Delivery complete + analysis</div>
                <div class="agent-action-body">
                  ✓ Photo & signature captured • Invoice generated<br>
                  ✓ Found consolidation opportunity (save 76%).
                </div>
              </div>
              <div class="agent-action confirmation">
                <div class="agent-action-header">💡 Consolidate East Coast Shipments?</div>
                <div class="agent-action-body">
                  Save <strong>$10,680/year</strong> • 34% carbon reduction.
                  <div class="button-group">
                    <button class="btn btn-primary">Yes, Optimize</button>
                    <button class="btn btn-secondary">Tell Me More</button>
                  </div>
                </div>
              </div>
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
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">Ship vaccines Boston→Miami, must stay 2–8°C.</div></div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous"><div class="agent-action-header">🤖 Pharma protocol activated</div><div class="agent-action-body">Filtering FDA-compliant carriers, IoT temp monitoring, gel pack calc, Miami heat risk.</div></div>
              <div class="agent-action input-needed"><div class="agent-action-header">❓ Compliance details</div><div class="agent-action-body">Weight/volume, docs, timeline, clinical/hospital?</div></div>
            </div>
          </div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">200 lbs, FDA docs, 48 hours, hospital.</div></div>
          <div class="message ai">
            <div class="avatar ai">🤖</div>
            <div class="message-content">
              <div class="agent-action autonomous"><div class="agent-action-header">🤖 Optimized solution</div><div class="agent-action-body">Premium cold chain express • IoT 30s • triple-redundant cooling • backup JAX facility.</div></div>
              <div class="options"><div class="option"><div class="option-title">✅ Premium Cold Chain Express</div><div class="option-details"><strong>$1,450</strong> • 36h • FDA docs included • 100% pharma on-time</div></div></div>
              ⚠️ Pre-cool 4 hours + Phase 22 gel packs.
            </div>
          </div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 2: Prep & Docs</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Booked: DFY-COLD-8392</div><div class="agent-action-body">IoT sensors assigned • FDA docs generated • thresholds set ±0.5°C • checklist emailed.</div></div>Pickup: Tomorrow 8:00 AM. I'll monitor temperature continuously.</div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚚 Step 3: Monitoring</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Pickup validation</div><div class="agent-action-body">Init temp 4.2°C • sensors active • 99.7% confidence of compliance.</div></div></div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Proactive intervention</div><div class="agent-action-body">Trend to 5.2°C due to traffic → boosted cooling 15% → stabilized at 4.9°C.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery & Compliance</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Delivered</div><div class="agent-action-body">100% within 2–6°C • temp logs + chain of custody + certificates sent.</div></div></div></div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">100%</div><div class="metric-label">Temp Compliance</div></div>
        <div class="metric-item"><div class="metric-value">$0</div><div class="metric-label">Product Loss</div></div>
        <div class="metric-item"><div class="metric-value">30s</div><div class="metric-label">Monitoring Interval</div></div>
        <div class="metric-item"><div class="metric-value">1</div><div class="metric-label">Interventions</div></div>
      </div>
    </div>
    `,
    whiteglove: `
    <div class="workflow-content" id="white-glove">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🔍 Step 1: High-Value Assessment</div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">$2M fragile sculpture NYC→LA.</div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 White glove protocol</div><div class="agent-action-body">Art-certified carriers • climate truck • $5M insurance • route smoothing.</div></div><div class="agent-action input-needed"><div class="agent-action-header">❓ Details</div><div class="agent-action-body">Dimensions, environment, timeline, access restrictions?</div></div></div></div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">8' tall, 600 lbs, 65–72°F, 45–55% RH, 5 days, narrow doors + stairs.</div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Plan</div><div class="agent-action-body">Custom crate • 4-person art team • climate truck • route avoids rough roads • AR site assessment.</div></div><div class="options"><div class="option"><div class="option-title">✅ Custom White Glove Service</div><div class="option-details"><strong>$8,500</strong> • 4-day transit • installation included</div></div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📱 Step 2: AR Assessment</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 AR analysis</div><div class="agent-action-body">Doorway 36" vs crate 34" → ✅ • stairs 45° → special dolly • security procedures logged.</div></div>✅ All clearances validated.</div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 3: Booking</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Booked: DFY-WG-9284</div><div class="agent-action-body">Team scheduled • crate materials ordered • policy active • appointments confirmed.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📸 Step 4: Documentation</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 360° documentation</div><div class="agent-action-body">52 photos • blockchain record • climate 68°F, 50% RH.</div></div>✅ Packing complete; loading now.</div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚚 Step 5: Transit Monitoring</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Route optimization</div><div class="agent-action-body">Vibration spike 0.8G → rerouted to smoother highway (+45m) • vibration now 0.3G.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 6: Delivery</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Delivered</div><div class="agent-action-body">100% condition match via AI image compare • curator sign-off.</div></div></div></div>
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
          <div class="step-indicator">🔍 Step 1: Intl. Analysis</div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">Shanghai→Chicago electronics. Options?</div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Multi-modal analysis</div><div class="agent-action-body">Ocean, air, rail; port congestion; customs timings; tariffs.</div></div><div class="agent-action input-needed"><div class="agent-action-header">❓ Details</div><div class="agent-action-body">Deadline, weight/value, HS codes, recurring?</div></div></div></div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">3 weeks, 5,000 lbs, $80K, no HS, monthly.</div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Routing</div><div class="agent-action-body">HS 8542.39 • USMCA savings • Ocean→Seattle + Rail→Chicago (19 days) • 12 docs generated • pre-clearance.</div></div><div class="options"><div class="option"><div class="option-title">✅ Ocean + Rail (via Seattle)</div><div class="option-details"><strong>$4,200</strong> • 19 days • 40% cheaper than air</div></div><div class="option"><div class="option-title">Air Freight Direct</div><div class="option-details"><strong>$12,800</strong> • 5 days</div></div></div><div class="agent-action confirmation"><div class="agent-action-header">💡 Monthly Program</div><div class="agent-action-body">15% volume discount • pre-clearance • dedicated AM • predictable schedule.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 2: Customs</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Booked: DFY-INTL-7392</div><div class="agent-action-body">12 docs cross-validated • duties $2,340 (saved $890) • next 11 shipments pre-scheduled.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚢 Step 3: Predictive Ports</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Tracking</div><div class="agent-action-body">Vessel 850 mi from Seattle • congestion 1.2d • arrival Dec 1 • rail booked.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Delivered</div><div class="agent-action-body">Arrived Dec 4, 9:45 AM • next monthly auto-scheduled • annual savings $7,560.</div></div></div></div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">$7.6K</div><div class="metric-label">Annual Savings</div></div>
        <div class="metric-item"><div class="metric-value">12</div><div class="metric-label">Auto Docs</div></div>
        <div class="metric-item"><div class="metric-value">2 days</div><div class="metric-label">Pre-clearance Gain</div></div>
        <div class="metric-item"><div class="metric-value">40%</div><div class="metric-label">Cost vs Air</div></div>
      </div>
    </div>
    `,
    emergency: `
    <div class="workflow-content" id="emergency">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🚨 Step 1: Emergency Response</div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">Detroit line down. Dallas part needed NOW. $50K/hr loss.</div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Emergency protocol</div><div class="agent-action-body">Air vs dedicated truck with downtime math.</div></div><div class="options"><div class="option"><div class="option-title">✈️ Air Freight (6h)</div><div class="option-details"><strong>$5,200</strong> • arrives 8:30 PM • total $305,200</div></div><div class="option"><div class="option-title">✅ Recommended: Dedicated Truck</div><div class="option-details"><strong>$2,400</strong> • leaves now • arrives ~9 PM • total $552,400</div></div></div><div class="agent-action confirmation"><div class="agent-action-header">⚡ Choose option</div><div class="agent-action-body">I recommend truck to restore production tonight.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">⚡ Step 2: Rapid Deployment</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Booked in 45s</div><div class="agent-action-body">DFY-URGENT-5721 • driver dispatched • GPS active • stakeholder alerts sent.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🛣️ Step 3: Dynamic Routing</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Real-time adjustment</div><div class="agent-action-body">I-35 incident → US-75 • +8 min instead of +30.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Delivery & ROI</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Delivered</div><div class="agent-action-body">Part at 9:10 PM • line restored 10:30 PM • cost avoided $62.6K • ROI 2,608%.</div></div></div></div>
        </div>
      </div>
      <div class="metrics-summary">
        <div class="metric-item"><div class="metric-value">45s</div><div class="metric-label">Booking Time</div></div>
        <div class="metric-item"><div class="metric-value">$62.6K</div><div class="metric-label">Cost Avoided</div></div>
        <div class="metric-item"><div class="metric-value">11 hrs</div><div class="metric-label">Dallas→Detroit</div></div>
        <div class="metric-item"><div class="metric-value">2,608%</div><div class="metric-label">ROI</div></div>
      </div>
    </div>
    `,
    project: `
    <div class="workflow-content" id="project">
      <div class="chat-container">
        <div class="message-group">
          <div class="step-indicator">🔍 Step 1: Project Analysis</div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">Open Denver office • move 50+ workstations, servers, furniture from SF over 2 weeks.</div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Project mode</div><div class="agent-action-body">3 phases • critical path • weekend deliveries • 7 shipments over 14 days.</div></div><div class="agent-action input-needed"><div class="agent-action-header">❓ Details</div><div class="agent-action-body">Space ready date • servers count • employee start • items that must move together?</div></div></div></div>
          <div class="message user"><div class="avatar user">👤</div><div class="message-content">Space ready Dec 1 • 10 servers + networking • employees start Dec 9 • servers/network together.</div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Master plan</div><div class="agent-action-body">Phase 1 IT Dec 1–2 (weekend) • Phase 2 workstations Dec 4,5,8 • Phase 3 furniture Dec 8,9 • 18% volume discount.</div></div><div class="agent-action confirmation"><div class="agent-action-header">📋 Complete Plan</div><div class="agent-action-body">Total $18,500 • savings $4,200 • PM: Sarah Chen • timed to avoid storage fees.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">📋 Step 2: Kickoff</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Confirmed: DFY-PROJ-2847</div><div class="agent-action-body">All 7 pre-booked • teams notified • contingency for weather.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">🚚 Step 3: Execution</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Phase 1 delivered</div><div class="agent-action-body">Servers delivered Dec 2 • IT has 7 days setup • Phase 2 on track.</div></div></div></div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Weather adjustment</div><div class="agent-action-body">Snow Dec 6–7 → shifted shipments to Dec 5 & 8 • timeline intact.</div></div></div></div>
        </div>
        <div class="message-group">
          <div class="step-indicator">✅ Step 4: Completion</div>
          <div class="message ai"><div class="avatar ai">🤖</div><div class="message-content"><div class="agent-action autonomous"><div class="agent-action-header">🤖 Project complete</div><div class="agent-action-body">7 shipments • 100% on time • 0 damage • employees started Dec 9.</div></div></div></div>
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