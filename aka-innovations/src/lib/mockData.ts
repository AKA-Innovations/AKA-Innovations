import { Post } from "./sanity";

export const mockPosts: Post[] = [
  {
    title: "The Day the Servers Cried: A Startup's Journey to Product Health",
    slug: "the-day-servers-cried-startup-journey-product-health",
    description: "At 2:14 AM, the API response latency reached 18.4 seconds. Read how early compromise code quicksands threaten scaling, and how Rohan & Abhishek refactored database constraints to lower CPU usage to 4%.",
    mainImage: {
      asset: {
        _ref: "mock-image-1",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
      }
    },
    publishedAt: "2026-07-14T02:14:00Z",
    readingTime: 7,
    author: {
      name: "Rohan S.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      bio: [{ _type: "block", children: [{ _type: "span", text: "Tech Lead at AKA Innovations specializing in cloud systems design and database performance tuning." }] }]
    },
    category: {
      title: "Product Engineering"
    },
    tags: ["Product Health", "SaaS Scaling", "Refactoring", "Query Optimization"],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Siddharth's phone did not buzz; it shrieked. It was 2:14 AM. In less than nine hours, he was scheduled to stand in front of three venture capital partners from Sequoia and Accel to demo his platform's real-time transactional dashboard. He swiped open his screen to see a page of alerts: API latency was sitting at 18.4 seconds, CPU was pegged at a solid 100%, and database connection pools were exhausted." }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "This is the silent crisis of MVP speed. Six months ago, Siddharth's team made code compromises to ship fast. They skipped indexing, allowed recursive API structures, and permitted a nested billing loop that polled the database continuously. It worked fine with 50 users. But with 5,000 concurrent mock visitors hitting the site on the eve of the pitch, the platform fell into quicksand." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Diagnosing the Bottlenecks: A Technical Audit" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Desperate, Siddharth dialed Rohan and Abhishek at AKA Innovations. Within minutes, the engineering team set up a tracing container on the production cluster. The profiling tools isolated three high-risk anomalies:" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "1. N+1 Queries: The billing dashboard fetched subscription lists, then did separate query calls for each user's history inside a React list map." }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "2. Full Table Scans: The system lacked indexes on foreign keys, forcing SQL to scan 500,000 logs sequentially." }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "3. Connection Leaks: API handlers did not close client pools on errors, letting zombie connections block active traffic." }]
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "💡 Pause and Think: Does your team monitor active database connection logs, or do you only find leaks when queries start failing during peaks?" }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The Refactoring Strategy" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "AKA Innovations executed a critical database restructuring. Rohan refactored the fetch logic to execute pre-cached SQL joins, added compound indexing on transactional records, and integrated pg-pool middleware to close zombie queries. In under three hours, the platform CPU dropped to 4%, latencies stabilized at 62ms, and Siddharth's pitch went off without a hitch." }]
      }
    ],
    metaTitle: "Startup Product Health & Scaling Audit Guide | AKA Innovations",
    metaDescription: "Follow Siddharth's 2 AM scaling crash story. Learn how Rohan & Abhishek diagnosed N+1 queries, fixed SQL pools, and cut CPU usage to 4%.",
    keywords: ["Product Health Assessment", "SaaS Audit", "Query Optimization", "Database Indexing"],
    localSeo: {
      businessName: "AKA Innovations Bangalore",
      targetCity: "Bangalore",
      targetRegion: "Karnataka",
      postalCode: "560001",
      address: "12, MG Road, Bangalore, Karnataka, India",
      latitude: 12.9716,
      longitude: 77.5946
    }
  },
  {
    title: "Rethinking Ranks: How We Re-engineered Timetable Scheduling in CBSE Schools",
    slug: "rethinking-ranks-re-engineered-timetable-scheduling-cbse-schools",
    description: "Principal Sharma spent 10 days balancing teacher workloads, classrooms, and board rules on paper. Discover how AKA Innovations' AI Agentic Solver resolves scheduling matrices in under 85 seconds.",
    mainImage: {
      asset: {
        _ref: "mock-image-2",
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
      }
    },
    publishedAt: "2026-07-12T10:00:00Z",
    readingTime: 6,
    author: {
      name: "Abhishek K.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
      bio: [{ _type: "block", children: [{ _type: "span", text: "Principal Architect at AKA Innovations, specializing in AI scheduling solvers and school ERP software." }] }]
    },
    category: {
      title: "School ERP"
    },
    tags: ["School ERP", "Agentic AI", "Timetable Solver", "CBSE Compliance"],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Principal Sharma of Springdale Public School sat behind a desk covered in colored spreadsheets, eraser crumbs, and scheduling grids. It was late May, and the annual scheduling puzzle had begun. Springdale has 1,200 students, 48 teachers, and CBSE guidelines that strictly govern student hours, classroom sizes, and teachers' maximum invigilation limits per week." }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Every time Principal Sharma matched a chemistry teacher with Grade 10, a room conflict popped up elsewhere. Teachers complained of back-to-back lectures, coordinators had overlaps, and compliance checks failed. This manual coordination took up to ten days of coordination cycles each term." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Enter AKA Innovations' Agentic Solver" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "To resolve this constraint matrix, we integrated a smart constraint satisfaction engine into the AKA School ERP. The admin simply types: 'Create exam schedule for Grade 9 to 12. Chemistry exams must be on Monday, no teacher can invigilate more than two slots per day, and resolve all classroom overlaps.'" }]
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "🧩 Try the Math: If you have 10 classrooms, 15 exam subjects, and 8 invigilators, how many manual checks do you have to do to make sure no teacher is double-booked? (Hint: It is in the thousands)." }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "The AI agent parsed these parameters, converted them into relational rules, and ran the constraint scheduler. In exactly 85 seconds, the algorithm solved the entire matrix, created conflict-free rosters, and pushed clean dashboard maps to teacher and parent mobile feeds." }]
      }
    ],
    metaTitle: "Automated CBSE School Timetable Solver | AKA Innovations",
    metaDescription: "Read Principal Sharma's timetable scheduling story. Learn how AKA Innovations' School ERP AI solver compiles conflict-free schedules in under 85 seconds.",
    keywords: ["School ERP", "School Timetable Solver", "CBSE School Software", "AI School Scheduling"],
    localSeo: {
      businessName: "AKA Innovations Delhi",
      targetCity: "Delhi NCR",
      targetRegion: "Delhi",
      postalCode: "110001",
      address: "Connaught Place, New Delhi, DL, India",
      latitude: 28.6304,
      longitude: 77.2177
    }
  },
  {
    title: "Heartbeats on the Cloud: The Architecture Behind AI-Powered Remote Monitoring",
    slug: "heartbeats-cloud-architecture-ai-remote-monitoring",
    description: "Telemetry systems stream 200 health datapoints per second. Find out how Health-Connect utilizes edge anomaly scoring filters to flag critical cardiac shifts and avoid alert fatigue.",
    mainImage: {
      asset: {
        _ref: "mock-image-3",
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
      }
    },
    publishedAt: "2026-06-30T14:20:00Z",
    readingTime: 8,
    author: {
      name: "Abhishek K.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
      bio: [{ _type: "block", children: [{ _type: "span", text: "Principal Architect at AKA Innovations with over 15 years experience in building high-availability healthcare monitoring platforms." }] }]
    },
    category: {
      title: "Health Connect"
    },
    tags: ["Health Connect", "Telemetry", "Remote Monitoring", "IoT Architecture", "HIPAA"],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "The cardiac ward at Metro General was deceptively quiet. On the central console, green lines rippled across monitors tracking thirty heart patients. But behind those screens was a storm of alert fatigue. The hospital staff received over 400 alarm alerts per day—most caused by patients rolling over or sensors shifting. As a result, critical alerts were frequently missed." }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Dr. Priya, the ward director, was concerned. She needed a telemetry system that could differentiate between a dislodged sensor lead and an actual cardiac event without adding lag to the data stream." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The Health-Connect Telemetry Pipeline" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "When Metro General contracted AKA Innovations, we designed a high-throughput IoT pipeline using AWS Kinesis and Lambda. The heart of the platform is an edge anomaly filter. Instead of routing raw logs to the cloud, the sensor edge parses 200 data points per second locally." }]
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "🏥 Telemetry Config Challenge: Which parameter would you prioritize for remote B2B telemetry? Strict data isolation (HIPAA) or low-latency sub-100ms pipelines?" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "When an anomaly matches a cardiac block (like Ventricular Tachycardia), the pipeline triggers a high-priority alert directly to Dr. Priya's mobile device, bypassing general alarm feeds. When Mr. Kapoor's heart rhythm fluctuated, the system flagged the anomaly in 88ms, allowing the medical team to administer aid before his heart went into arrest." }]
      }
    ],
    metaTitle: "B2B AI Remote Cardiac Monitoring Architecture | Health-Connect",
    metaDescription: "Discover how AKA Innovations' Health-Connect IoT platform uses edge anomaly filters and AWS Kinesis pipelines to process health metrics securely.",
    keywords: ["Remote Health Monitoring", "Cardiac Telemetry Architecture", "IoT Healthcare", "HIPAA Compliance"],
    localSeo: {
      businessName: "AKA Innovations Hyderabad",
      targetCity: "Hyderabad",
      targetRegion: "Telangana",
      postalCode: "500081",
      address: "HITECH City, Hyderabad, Telangana, India",
      latitude: 17.4483,
      longitude: 78.3741
    }
  }
];
