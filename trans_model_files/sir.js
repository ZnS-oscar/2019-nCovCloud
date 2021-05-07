(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    192 : function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0),
        i = a.n(n),
        r = a(21),
        o = a.n(r),
        s = (a(85), a(3)),
        l = a(4),
        c = a(7),
        h = a(5),
        d = a(6),
        u = (a(32), a(63)),
        m = a.n(u),
        p = a(64),
        f = a.n(p),
        g = a(65),
        v = a.n(g),
        w = a(66),
        y = a.n(w),
        b = a(67),
        E = a.n(b),
        k = a(68),
        S = a.n(k),
        I = a(69),
        x = a.n(I),
        T = a(70),
        P = a.n(T),
        C = a(71),
        A = a.n(C),
        N = a(72),
        O = a.n(N),
        R = a(73),
        F = a.n(R),
        M = a(74),
        z = a.n(M),
        D = a(75),
        j = a.n(D),
        B = a(79),
        L = a(31),
        W = a.n(L),
        _ = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(l.a)(e, null, [{
                key: "makeHex",
                value: function(e) {
                    var t = W()(e);
                    return [t.red(), t.green(), t.blue()]
                }
            },
            {
                key: "makeRGB",
                value: function(e, t, a) {
                    return [e, t, a]
                }
            },
            {
                key: "makeHSL",
                value: function(e, t, a) {
                    var n = W.a.hsl(e, t, a);
                    return [n.red(), n.green(), n.blue()]
                }
            },
            {
                key: "blend",
                value: function(e, t, a) {
                    return [(t[0] - e[0]) * a + e[0], (t[1] - e[1]) * a + e[1], (t[2] - e[2]) * a + e[2]]
                }
            },
            {
                key: "withAlpha",
                value: function(e, t) {
                    return [e[0], e[1], e[2], t]
                }
            },
            {
                key: "r",
                value: function(e) {
                    return e[0]
                }
            },
            {
                key: "g",
                value: function(e) {
                    return e[1]
                }
            },
            {
                key: "b",
                value: function(e) {
                    return e[2]
                }
            },
            {
                key: "a",
                value: function(e) {
                    return 4 === e.length ? e[3] : 255
                }
            },
            {
                key: "hue",
                value: function(e) {
                    var t = e[0] / 255,
                    a = e[1] / 255,
                    n = e[2] / 255,
                    i = Math.min(t, a, n),
                    r = Math.max(t, a, n),
                    o = NaN,
                    s = r - i,
                    l = (r + i) / 2;
                    return s ? (o = t === r ? (a - n) / s + 6 * (a < n) : a === r ? (n - t) / s + 2 : (t - a) / s + 4, s /= l < .5 ? r + i: 2 - r - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o,
                    o
                }
            },
            {
                key: "__helperRep",
                value: function(t) {
                    return W.a.rgb(e.r(t), e.g(t), e.b(t), e.a(t))
                }
            },
            {
                key: "__fromHelperRep",
                value: function(e) {
                    return [e.red(), e.green(), e.blue()]
                }
            },
            {
                key: "hex",
                value: function(t) {
                    return e.__helperRep(t).toString()
                }
            },
            {
                key: "opacity",
                value: function(t) {
                    return e.a(t) / 255
                }
            },
            {
                key: "lighten",
                value: function(t, a) {
                    return e.__fromHelperRep(e.__helperRep(t).whiten(a))
                }
            }]),
            e
        } (),
        q = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(l.a)(e, null, [{
                key: "assert",
                value: function(e, t) {
                    e || (console.log("ACK!", t), alert("ACK! " + t))
                }
            },
            {
                key: "makeImageUri",
                value: function(e) {
                    var t = -1,
                    a = !0,
                    n = !1,
                    i = void 0;
                    try {
                        for (var r, o = e[Symbol.iterator](); ! (a = (r = o.next()).done); a = !0) {
                            var s = r.value;
                            s.length > t && (t = s.length)
                        }
                    } catch(I) {
                        n = !0,
                        i = I
                    } finally {
                        try {
                            a || null == o.
                            return || o.
                            return ()
                        } finally {
                            if (n) throw i
                        }
                    }
                    for (var l = e.length,
                    c = new Uint8ClampedArray(t * l * 4), h = 0; h < l; h++) {
                        for (var d = e[h].length, u = Math.floor((t - d) / 2), m = t - d - u, p = 0; p < d; p++) {
                            var f = e[h][p],
                            g = 4 * (h * t + u + p);
                            c[g] = _.r(f),
                            c[g + 1] = _.g(f),
                            c[g + 2] = _.b(f),
                            c[g + 3] = _.a(f)
                        }
                        for (var v = 0; v < u; v++) {
                            var w = 4 * (h * t + v);
                            c[w] = 255,
                            c[w + 1] = 255,
                            c[w + 2] = 255,
                            c[w + 3] = 255
                        }
                        for (var y = d + m; y < t; y++) {
                            var b = 4 * (h * t + y);
                            c[b] = 255,
                            c[b + 1] = 255,
                            c[b + 2] = 255,
                            c[b + 3] = 255
                        }
                    }
                    var E = document.createElement("canvas"),
                    k = E.getContext("2d");
                    E.width = t,
                    E.height = l;
                    var S = k.createImageData(t, l);
                    return S.data.set(c),
                    k.putImageData(S, 0, 0),
                    E.toDataURL()
                }
            },
            {
                key: "arraysEqual",
                value: function(t, a) {
                    if (t.length !== a.length) return ! 1;
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n],
                        r = a[n],
                        o = i === r;
                        if (Array.isArray(i) && Array.isArray(r) && (o = e.arraysEqual(i, r)), !o) return ! 1
                    }
                    return ! 0
                }
            }]),
            e
        } (),
        K = function() {
            function e(t) {
                Object(s.a)(this, e),
                null !== t && void 0 !== t || (t = Math.floor(Math.random() * e.m)),
                this.lastX = Math.floor(t)
            }
            return Object(l.a)(e, [{
                key: "random",
                value: function() {
                    return this.lastX = (e.a * this.lastX + e.c) % e.m,
                    this.lastX / e.m
                }
            },
            {
                key: "randBetween",
                value: function(e, t) {
                    return this.random() * (t - e) + e
                }
            }]),
            e
        } ();
        K.m = 2147483648,
        K.a = 214013,
        K.c = 2531011;
        var H = 0,
        U = function() {
            function e(t) {
                Object(s.a)(this, e),
                this.state = H,
                this.previousState = H,
                this.infectionType = null,
                this.previousInfectionType = null,
                this.totalInfectionWeight = 0,
                this.linked = !1,
                this.mediaOutlet = !1,
                this.specialDegree = null,
                this.realScientist = !1,
                this.knowledgeLevel = null,
                this.rng = t
            }
            return Object(l.a)(e, [{
                key: "savePreviousState",
                value: function() {
                    this.previousState = this.state,
                    this.previousInfectionType = this.infectionType
                }
            },
            {
                key: "wasInfected",
                value: function() {
                    return 1 === this.previousState
                }
            },
            {
                key: "isSusceptible",
                value: function() {
                    return this.state === H
                }
            },
            {
                key: "isInfected",
                value: function() {
                    return 1 === this.state
                }
            },
            {
                key: "isRemoved",
                value: function() {
                    return 2 === this.state
                }
            },
            {
                key: "isAllowedToBeRemoved",
                value: function() {
                    return ! this.linked && null === this.knowledgeLevel
                }
            },
            {
                key: "setSusceptible",
                value: function() {
                    this.state = H
                }
            },
            {
                key: "setInfected",
                value: function(e, t) {
                    "1" === e || "2" === e || "3" === e || "4" === e ? (this.state = 1, (null === this.infectionType || parseInt(e) > parseInt(this.infectionType)) && (this.infectionType = e), 2 === this.knowledgeLevel && "1" === this.infectionType ? this.infectionType = "2": 3 === this.knowledgeLevel && "2" === this.infectionType ? this.infectionType = "3": 4 === this.knowledgeLevel && "3" === this.infectionType && (this.infectionType = "4")) : (this.totalInfectionWeight += t, this.rng.random() < t / this.totalInfectionWeight && (this.state = 1, this.infectionType = e))
                }
            },
            {
                key: "setRemoved",
                value: function() {
                    this.state = 2
                }
            },
            {
                key: "isMediaOutlet",
                value: function() {
                    return this.mediaOutlet
                }
            },
            {
                key: "setMediaOutlet",
                value: function() {
                    this.mediaOutlet = !0
                }
            },
            {
                key: "isRealScientist",
                value: function() {
                    return this.realScientist
                }
            },
            {
                key: "setRealScientist",
                value: function(e) {
                    this.realScientist = e,
                    this.specialDegree = 3
                }
            },
            {
                key: "getKnowledgeLevel",
                value: function() {
                    return this.knowledgeLevel
                }
            },
            {
                key: "setKnowledgeLevel",
                value: function(e) {
                    this.knowledgeLevel = e
                }
            },
            {
                key: "getKnowledgeLevelColor",
                value: function() {
                    return ["#6BA306", "#19B655", "#1C94FF", "#BA5AFF"][this.knowledgeLevel - 1]
                }
            },
            {
                key: "getInfectionTypeColor",
                value: function() {
                    return ["#6BA306", "#19B655", "#1C94FF", "#BA5AFF"][parseInt(this.infectionType) - 1]
                }
            },
            {
                key: "getInfectionType",
                value: function() {
                    return this.infectionType
                }
            },
            {
                key: "resetInfectionWeight",
                value: function() {
                    this.totalInfectionWeight = 0
                }
            },
            {
                key: "tryToInfect",
                value: function(e, t, a, n, i) {
                    if (!e.isRemoved() && this.rng.random() < t) {
                        var r = this.previousInfectionType,
                        o = !0;
                        if (a) {
                            var s = null;
                            s = this.isRealScientist() ? "REAL" === r ? n: 1 - n: "REAL" === r ? i: 1 - i,
                            o = this.rng.random() < s
                        }
                        o && e.setInfected(r, 1)
                    }
                }
            }]),
            e
        } (),
        G = function() {
            function e(t, a, n) {
                Object(s.a)(this, e),
                this.network = t,
                this.neighbors = new Set,
                this.infected = !1,
                this.infectionHistory = [],
                this.highlighted = !1,
                this.patientZero = !1,
                this.immune = !1,
                this.centerX = a,
                this.centerY = n
            }
            return Object(l.a)(e, [{
                key: "addNeighbor",
                value: function(e) {
                    this.neighbors.add(e)
                }
            }]),
            e
        } (),
        V = function() {
            function e() {
                Object(s.a)(this, e),
                this.nodes = new Set
            }
            return Object(l.a)(e, [{
                key: "addNode",
                value: function(e) {
                    if (e.network !== this) throw new Error("Node being added to Network that it doesn't belong to.");
                    this.nodes.add(e)
                }
            },
            {
                key: "getInfectedNodes",
                value: function() {
                    var e = new Set,
                    t = !0,
                    a = !1,
                    n = void 0;
                    try {
                        for (var i, r = this.nodes[Symbol.iterator](); ! (t = (i = r.next()).done); t = !0) {
                            var o = i.value;
                            o.infected && e.add(o)
                        }
                    } catch(s) {
                        a = !0,
                        n = s
                    } finally {
                        try {
                            t || null == r.
                            return || r.
                            return ()
                        } finally {
                            if (a) throw n
                        }
                    }
                    return e
                }
            }], [{
                key: "generate",
                value: function(t, a, n, i, r) {
                    var o = new e;
                    if ("grid" !== r) throw new Error("Unexpected networkType: " + r);
                    for (var s = Math.sqrt(i), l = Math.sqrt(i), c = 1 / s, h = 1 / l, d = [], u = 0; u < s; u++) {
                        for (var m = [], p = 0; p < l; p++) {
                            var f = new G(o, (p + .5) * h, (u + .5) * c);
                            o.addNode(f),
                            m.push(f),
                            t.random() < n && (f.immune = !0)
                        }
                        d.push(m)
                    }
                    var g = d[Math.floor(s / 2)][Math.floor(l / 2)];
                    g.patientZero = !0,
                    g.infected = !0,
                    g.immune = !1;
                    for (var v = 0; v < s; v++) for (var w = 0; w < l; w++) for (var y = d[v][w], b = -1; b <= 1; b++) for (var E = -1; E <= 1; E++) if ((0 !== b || 0 !== E) && (4 !== a || 0 === b || 0 === E)) {
                        var k = v + b,
                        S = w + E;
                        if (k >= 0 && k < s && S >= 0 && S < l) {
                            var I = d[k][S];
                            y.addNeighbor(I)
                        }
                    }
                    return o
                }
            }]),
            e
        } (),
        Y = a(22),
        X = a.n(Y),
        J = function(e) {
            function t(e) {
                var a;
                return Object(s.a)(this, t),
                (a = Object(c.a)(this, Object(h.a)(t).call(this, e))).myRef = i.a.createRef(),
                a.previousSimulationParams = [],
                a.network = null,
                a.previousDrawingParams = [],
                a.initializeFromProps(a.props, !0),
                a
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "componentWillReceiveProps",
                value: function(e, t) {
                    this.initializeFromProps(e, !1)
                }
            },
            {
                key: "initializeFromProps",
                value: function(e, t) {
                    this.width = e.width,
                    this.height = e.height;
                    var a = e.randomSeed; - 1 === a && (a = Math.floor(3e6 * Math.random())),
                    this.rng = new K(a);
                    var n = {
                        playing: !1,
                        degree: e.degree,
                        immunityFraction: e.immunityFraction,
                        networkSize: e.networkSize,
                        networkType: e.networkType,
                        maxIterations: e.maxIterations,
                        transmissionProbability: e.transmissionProbability,
                        drawNodeOutlines: e.drawNodeOutlines,
                        drawRelationships: e.drawRelationships,
                        nodeSize: e.nodeSize
                    };
                    t ? this.state = n: this.setState(n),
                    e.reinfectionsAllowed && (this.onTick = this.onTick.bind(this), this.interval = setInterval(this.onTick, 100))
                }
            },
            {
                key: "componentDidMount",
                value: function() {
                    this.svg = B.a(this.myRef.current),
                    this.svg.on("click",
                    function() {}),
                    this.regenerate()
                }
            },
            {
                key: "onTick",
                value: function() {
                    this.state.playing && (this.simulateStep(), this.redraw(!0))
                }
            },
            {
                key: "generate",
                value: function(e) {
                    var t = [this.state.degree, this.state.immunityFraction, this.state.networkSize, this.state.networkType];
                    e || !q.arraysEqual(this.previousSimulationParams, t) ? (this.previousSimulationParams = t, console.log("Generating new networking"), this.network = V.generate(this.rng, this.state.degree, this.state.immunityFraction, this.state.networkSize, this.state.networkType), !this.props.reinfectionsAllowed && this.props.numAutoRuns > 0 && this.simulateInfections(this.props.numAutoRuns)) : console.log("rejecting generate")
                }
            },
            {
                key: "simulateInfections",
                value: function(e) {
                    for (var t = 0; t < e; t++) this.simulateInfection()
                }
            },
            {
                key: "simulateInfection",
                value: function() {
                    var e = !0,
                    t = !1,
                    a = void 0;
                    try {
                        for (var n, i = this.network.nodes[Symbol.iterator](); ! (e = (n = i.next()).done); e = !0) {
                            var r = n.value;
                            r.infected = r.patientZero
                        }
                    } catch(F) {
                        t = !0,
                        a = F
                    } finally {
                        try {
                            e || null == i.
                            return || i.
                            return ()
                        } finally {
                            if (t) throw a
                        }
                    }
                    var o = new Set,
                    s = !0,
                    l = !1,
                    c = void 0;
                    try {
                        for (var h, d = this.network.getInfectedNodes()[Symbol.iterator](); ! (s = (h = d.next()).done); s = !0) {
                            var u = h.value;
                            o.add(u)
                        }
                    } catch(F) {
                        l = !0,
                        c = F
                    } finally {
                        try {
                            s || null == d.
                            return || d.
                            return ()
                        } finally {
                            if (l) throw c
                        }
                    }
                    for (var m = 0; o.size > 0 && ( - 1 === this.state.maxIterations || m < this.state.maxIterations);) {
                        var p = o;
                        o = new Set;
                        var f = !0,
                        g = !1,
                        v = void 0;
                        try {
                            for (var w, y = p[Symbol.iterator](); ! (f = (w = y.next()).done); f = !0) {
                                var b = w.value,
                                E = !0,
                                k = !1,
                                S = void 0;
                                try {
                                    for (var I, x = b.neighbors[Symbol.iterator](); ! (E = (I = x.next()).done); E = !0) {
                                        var T = I.value;
                                        if (!T.immune && !T.infected) this.rng.random() < this.state.transmissionProbability && (T.infected = !0, o.add(T))
                                    }
                                } catch(F) {
                                    k = !0,
                                    S = F
                                } finally {
                                    try {
                                        E || null == x.
                                        return || x.
                                        return ()
                                    } finally {
                                        if (k) throw S
                                    }
                                }
                            }
                        } catch(F) {
                            g = !0,
                            v = F
                        } finally {
                            try {
                                f || null == y.
                                return || y.
                                return ()
                            } finally {
                                if (g) throw v
                            }
                        }
                        m++
                    }
                    var P = !0,
                    C = !1,
                    A = void 0;
                    try {
                        for (var N, O = this.network.nodes[Symbol.iterator](); ! (P = (N = O.next()).done); P = !0) {
                            var R = N.value;
                            R.infectionHistory.push(R.infected)
                        }
                    } catch(F) {
                        C = !0,
                        A = F
                    } finally {
                        try {
                            P || null == O.
                            return || O.
                            return ()
                        } finally {
                            if (C) throw A
                        }
                    }
                    console.log("finished simulating")
                }
            },
            {
                key: "simulateStep",
                value: function() {
                    var e = new Set,
                    t = !0,
                    a = !1,
                    n = void 0;
                    try {
                        for (var i, r = this.network.getInfectedNodes()[Symbol.iterator](); ! (t = (i = r.next()).done); t = !0) {
                            var o = i.value;
                            e.add(o),
                            o.infected = !1
                        }
                    } catch(k) {
                        a = !0,
                        n = k
                    } finally {
                        try {
                            t || null == r.
                            return || r.
                            return ()
                        } finally {
                            if (a) throw n
                        }
                    }
                    var s = !0,
                    l = !1,
                    c = void 0;
                    try {
                        for (var h, d = e[Symbol.iterator](); ! (s = (h = d.next()).done); s = !0) {
                            var u = h.value,
                            m = Array.from(u.neighbors);
                            m.push(u);
                            for (var p = 0; p < m.length; p++) {
                                var f = m[p];
                                if (!f.immune && !f.infected) this.rng.random() < this.state.transmissionProbability && (f.infected = !0)
                            }
                        }
                    } catch(k) {
                        l = !0,
                        c = k
                    } finally {
                        try {
                            s || null == d.
                            return || d.
                            return ()
                        } finally {
                            if (l) throw c
                        }
                    }
                    var g = !0,
                    v = !1,
                    w = void 0;
                    try {
                        for (var y, b = this.network.nodes[Symbol.iterator](); ! (g = (y = b.next()).done); g = !0) {
                            var E = y.value;
                            E.infectionHistory.push(E.infected)
                        }
                    } catch(k) {
                        v = !0,
                        w = k
                    } finally {
                        try {
                            g || null == b.
                            return || b.
                            return ()
                        } finally {
                            if (v) throw w
                        }
                    }
                }
            },
            {
                key: "regenerate",
                value: function() {
                    this.generate(),
                    this.forceUpdate()
                }
            },
            {
                key: "togglePlayback",
                value: function() {
                    this.setState({
                        playing: !this.state.playing
                    })
                }
            },
            {
                key: "redraw",
                value: function(e) {
                    if (null !== this.svg && void 0 !== this.svg) {
                        var t = [this.network, this.state.drawNodeOutlines, this.state.drawRelationships];
                        if (e || !q.arraysEqual(this.previousDrawingParams, t)) {
                            this.previousDrawingParams = t,
                            console.log("redrawing..."),
                            this.svg.selectAll("svg > *").remove(),
                            this.background = this.svg.append("g"),
                            this.relationships = this.svg.append("g"),
                            this.nodes = this.svg.append("g");
                            var a = !0,
                            n = !1,
                            i = void 0;
                            try {
                                for (var r, o = this.network.nodes[Symbol.iterator](); ! (a = (r = o.next()).done); a = !0) {
                                    var s = r.value,
                                    l = s.centerX * this.props.width,
                                    c = s.centerY * this.props.height,
                                    h = this.state.nodeSize,
                                    d = "#FFF";
                                    if (this.props.reinfectionsAllowed) d = s.infected ? "#48F": "#FFF";
                                    else if (s.infectionHistory.length > 1) {
                                        var u = 0,
                                        m = !0,
                                        p = !1,
                                        f = void 0;
                                        try {
                                            for (var g, v = s.infectionHistory[Symbol.iterator](); ! (m = (g = v.next()).done); m = !0) {
                                                g.value && u++
                                            }
                                        } catch(O) {
                                            p = !0,
                                            f = O
                                        } finally {
                                            try {
                                                m || null == v.
                                                return || v.
                                                return ()
                                            } finally {
                                                if (p) throw f
                                            }
                                        }
                                        var w = u / s.infectionHistory.length;
                                        d = _.hex(_.blend(_.makeHex("#FFF"), _.makeHex("#48F"), w))
                                    } else s.infected && (d = "#48F");
                                    var y = "#000";
                                    s.immune && (y = "#CCC", d = "#CCC");
                                    var b = "circle";
                                    if (this.state.nodeSize <= 10 && (b = "rect"), this.drawNodeBody(b, l, c, h, d, 1), !s.immune && s.immune || this.state.drawNodeOutlines && this.drawNodeOutline(b, l, c, h, y), this.state.drawRelationships) {
                                        var E = !0,
                                        k = !1,
                                        S = void 0;
                                        try {
                                            for (var I, x = s.neighbors[Symbol.iterator](); ! (E = (I = x.next()).done); E = !0) {
                                                var T = I.value,
                                                P = T.centerX * this.props.width,
                                                C = T.centerY * this.props.height,
                                                A = 5,
                                                N = "#ccc";
                                                s.highlighted && (A = 5, N = "#000"),
                                                this.relationships.append("line").style("stroke", N).attr("stroke-width", A).attr("x1", l).attr("y1", c).attr("x2", P).attr("y2", C)
                                            }
                                        } catch(O) {
                                            k = !0,
                                            S = O
                                        } finally {
                                            try {
                                                E || null == x.
                                                return || x.
                                                return ()
                                            } finally {
                                                if (k) throw S
                                            }
                                        }
                                    }
                                }
                            } catch(O) {
                                n = !0,
                                i = O
                            } finally {
                                try {
                                    a || null == o.
                                    return || o.
                                    return ()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        }
                    }
                }
            },
            {
                key: "drawNodeOutline",
                value: function(e, t, a, n, i) {
                    var r = Math.ceil(n / 10);
                    "circle" === e ? this.nodes.append("circle").attr("fill", "none").attr("stroke", i).attr("stroke-width", r).attr("cx", t).attr("cy", a).attr("r", n / 2) : this.nodes.append("rect").style("fill", "none").style("stroke", i).style("stroke-width", r).attr("x", t - n / 2).attr("y", a - n / 2).attr("width", n).attr("height", n)
                }
            },
            {
                key: "drawNodeBody",
                value: function(e, t, a, n, i, r) {
                    "circle" === e ? this.nodes.append("circle").style("fill", i).style("fill-opacity", r).attr("cx", t).attr("cy", a).attr("r", n / 2) : this.nodes.append("rect").style("fill", i).style("fill-opacity", r).attr("x", t - n / 2).attr("y", a - n / 2).attr("width", n).attr("height", n)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this;
                    this.generate(),
                    this.redraw();
                    var t = null;
                    this.props.showTransmissionProbabilitySlider && (t = i.a.createElement("div", null, "Transmission probability: ", i.a.createElement("br", null), i.a.createElement("br", null), i.a.createElement(X.a, {
                        style: {
                            width: 200
                        },
                        min: 0,
                        max: 1,
                        value: this.state.transmissionProbability,
                        onChange: function(t, a) {
                            e.setState({
                                transmissionProbability: a
                            })
                        }
                    }), i.a.createElement("br", null), this.state.transmissionProbability));
                    var a = null;
                    this.props.showImmunityFractionSlider && (a = i.a.createElement("div", null, "Immunity fraction: ", i.a.createElement("br", null), i.a.createElement("br", null), i.a.createElement(X.a, {
                        style: {
                            width: 200
                        },
                        min: 0,
                        max: 1,
                        value: this.state.immunityFraction,
                        onChange: function(t, a) {
                            e.setState({
                                immunityFraction: a
                            })
                        }
                    }), i.a.createElement("br", null)));
                    var n = null;
                    this.props.showDrawRelationshipsCheckbox && (n = i.a.createElement("div", {
                        className: "draw-death-checkbox"
                    },
                    i.a.createElement("label", null, i.a.createElement("input", {
                        type: "checkbox",
                        checked: this.state.drawRelationships,
                        onChange: function(t) {
                            e.setState({
                                drawRelationships: t.target.checked
                            })
                        }
                    }), " relationships")));
                    var r = null,
                    o = null,
                    s = null,
                    l = null;
                    this.props.showSimulationButtons && (r = i.a.createElement("div", null, i.a.createElement("span", {
                        onClick: function() {
                            e.generate(!0),
                            e.forceUpdate()
                        }
                    },
                    "New network")), this.props.reinfectionsAllowed || (o = i.a.createElement("div", null, i.a.createElement("span", {
                        onClick: function() {
                            e.simulateInfections(1),
                            e.redraw(!0)
                        }
                    },
                    "1 simulations")), s = i.a.createElement("div", null, i.a.createElement("span", {
                        onClick: function() {
                            e.simulateInfections(10),
                            e.redraw(!0)
                        }
                    },
                    "10 simulations")), l = i.a.createElement("div", null, i.a.createElement("span", {
                        onClick: function() {
                            e.simulateInfections(100),
                            e.redraw(!0)
                        }
                    },
                    "100 simulations"))));
                    var c = null;
                    if (this.props.reinfectionsAllowed) {
                        var h = "Start!";
                        this.state.playing && (h = "Stop!"),
                        c = i.a.createElement("div", null, i.a.createElement("span", {
                            onClick: function() {
                                e.togglePlayback()
                            }
                        },
                        h))
                    }
                    return i.a.createElement("div", {
                        className: "widget-container"
                    },
                    t, a, r, o, s, l, c, i.a.createElement("svg", {
                        ref: this.myRef,
                        width: this.width,
                        height: this.height
                    }), n)
                }
            }]),
            t
        } (n.Component);
        J.defaultProps = {
            randomSeed: -1,
            reinfectionsAllowed: !1,
            degree: 4,
            immunityFraction: 0,
            networkType: "grid",
            networkSize: 361,
            maxIterations: -1,
            transmissionProbability: .3,
            drawNodeOutlines: !0,
            drawRelationships: !0,
            height: 650,
            nodeSize: 20,
            width: 650,
            showDrawRelationshipsCheckbox: !1,
            showImmunityFractionSlider: !1,
            showSimulationButtons: !1,
            showTransmissionProbabilitySlider: !1
        };
        var Z = a(11),
        $ = function(e) {
            function t(e) {
                var a;
                return Object(s.a)(this, t),
                (a = Object(c.a)(this, Object(h.a)(t).call(this, e))).initializeFromProps(a.props, !0),
                a
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "componentWillReceiveProps",
                value: function(e, t) {
                    this.initializeFromProps(e, !1)
                }
            },
            {
                key: "initializeFromProps",
                value: function(e, t) {
                    var a = {};
                    t ? this.state = a: this.setState(a),
                    null !== this.interval && void 0 !== this.interval && clearInterval(this.interval),
                    this.interval = setInterval(e.callback, e.milliseconds)
                }
            },
            {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            t
        } (n.Component);
        $.defaultProps = {};
        var Q = a(77),
        ee = a(78),
        te = a.n(ee),
        ae = a(194),
        ne = Object(ae.withStyles)({
            root: {
                background: "linear-gradient(0deg, #f0f0f0 30%, #f8f8f8 90%)"
            },
            label: {
                textTransform: "capitalize"
            }
        })(te.a),
        ie = Object(ae.withStyles)({
            root: {
                background: "linear-gradient(0deg, #aaf8aa 30%, #bbf8bb 90%)"
            },
            label: {
                textTransform: "capitalize"
            }
        })(ne),
        re = function(e) {
            function t() {
                return Object(s.a)(this, t),
                Object(c.a)(this, Object(h.a)(t).apply(this, arguments))
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "render",
                value: function() {
                    var e = this,
                    t = {
                        margin: "0.5rem"
                    };
                    return "small" === this.props.size && (t = {
                        margin: "0.5rem",
                        maxWidth: "30px",
                        maxHeight: "30px",
                        minWidth: "30px",
                        minHeight: "30px"
                    }),
                    this.props.highlighted ? i.a.createElement(ie, {
                        variant: "contained",
                        onClick: function(t) {
                            t.preventDefault(),
                            e.props.onClick(t)
                        },
                        style: t
                    },
                    this.props.children) : i.a.createElement(ne, {
                        variant: "contained",
                        onClick: function(t) {
                            t.preventDefault(),
                            e.props.onClick(t)
                        },
                        style: t
                    },
                    this.props.children)
                }
            }]),
            t
        } (i.a.PureComponent),
        oe = function(e) {
            function t() {
                return Object(s.a)(this, t),
                Object(c.a)(this, Object(h.a)(t).apply(this, arguments))
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "render",
                value: function() {
                    var e = se.SUSCEPTIBLE_COLOR;
                    return "infected" === this.props.type ? e = se.INFECTED_COLOR: "removed" === this.props.type && (e = se.REMOVED_COLOR),
                    i.a.createElement("div", {
                        style: {
                            marginBottom: "-2px",
                            border: "1px black solid",
                            width: "1rem",
                            height: "1rem",
                            backgroundColor: e,
                            display: "inline-block"
                        }
                    })
                }
            }]),
            t
        } (n.Component),
        se = function(e) {
            function t(e) {
                var a;
                return Object(s.a)(this, t),
                (a = Object(c.a)(this, Object(h.a)(t).call(this, e))).canvasRef = i.a.createRef(),
                a.previousSimulationParams = ["foo"],
                a.previousDrawingParams = [],
                a.onTick = a.onTick.bind(Object(Z.a)(Object(Z.a)(a))),
                a.onEnter = a.onEnter.bind(Object(Z.a)(Object(Z.a)(a))),
                a.onLeave = a.onLeave.bind(Object(Z.a)(Object(Z.a)(a))),
                a.initializeFromProps(a.props, !0),
                a.updateWindowDimensions = a.updateWindowDimensions.bind(Object(Z.a)(Object(Z.a)(a))),
                a
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "updateWindowDimensions",
                value: function() {
                    var e = this.props.gridCols * this.props.nodeSize;
                    this.props.nodeSize >= 5 && (e += this.props.gridCols);
                    var t = Math.min(e, document.documentElement.clientWidth - 40),
                    a = Math.floor(t / this.props.gridCols);
                    t = a * this.props.gridCols,
                    this.gridWidth === t && this.nodeSize === a || (this.gridWidth = t, this.nodeSize = a, this.redraw(!0))
                }
            },
            {
                key: "componentWillReceiveProps",
                value: function(e, t) {}
            },
            {
                key: "initializeFromProps",
                value: function(e, t) {
                    this.gridWidth = e.gridCols * e.nodeSize,
                    this.nodeSize = e.nodeSize;
                    var a = e.randomSeed; - 1 === a && (a = Math.floor(3e6 * Math.random()), console.log("ack")),
                    this.rng = new K(a);
                    var n = {
                        numActiveNodes: 0,
                        playing: !1,
                        visible: !1,
                        degree: e.degree,
                        immunityFraction: e.immunityFraction,
                        longDistaceNetworkActive: e.addLinkedNodes,
                        maxActiveNodes: e.maxActiveNodes,
                        maxIterations: e.maxIterations,
                        networkEffectStrength: 0,
                        transmissionProbability: e.transmissionProbability,
                        vacuumProbability: e.vacuumProbability,
                        careeristPreferenceForTruth: e.careeristPreferenceForTruth,
                        realScientistFraction: e.realScientistFraction,
                        scientistPreferenceForTruth: e.scientistPreferenceForTruth,
                        drawNodeOutlines: e.drawNodeOutlines,
                        speed: e.speed
                    };
                    t ? this.state = n: this.setState(n)
                }
            },
            {
                key: "componentDidMount",
                value: function() {
                    this.canvas = this.canvasRef.current,
                    this.updateWindowDimensions(),
                    window.addEventListener("resize", this.updateWindowDimensions),
                    this.redraw(!0)
                }
            },
            {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.updateWindowDimensions)
                }
            },
            {
                key: "onTick",
                value: function() {
                    this.state.playing && this.state.visible && (this.simulateStep(), this.redraw(!0))
                }
            },
            {
                key: "onEnter",
                value: function() {
                    this.setState({
                        visible: !0
                    }),
                    this.redraw(!0)
                }
            },
            {
                key: "onLeave",
                value: function() {
                    this.setState({
                        visible: !1
                    })
                }
            },
            {
                key: "regenerate",
                value: function() {
                    this.generate(),
                    this.forceUpdate()
                }
            },
            {
                key: "generate",
                value: function(e) {
                    var a = [];
                    if (e || !q.arraysEqual(this.previousSimulationParams, a)) {
                        this.previousSimulationParams = a,
                        console.log("Generating new network");
                        var n = this.props.gridRows,
                        i = this.props.gridCols;
                        this.grid = [];
                        for (var r = 0; r < n; r++) {
                            for (var o = [], s = 0; s < i; s++) {
                                var l = new U(this.rng);
                                l.immune = this.rng.random() < this.state.immunityFraction,
                                o.push(l)
                            }
                            this.grid.push(o)
                        }
                        var c, h, d = new Set;
                        if (this.props.addLinkedNodes) for (var u = 0; u < 3; u++) for (var m = 0; m < 3; m++) {
                            var p = Math.floor(n / 6 * (2 * u + 1)),
                            f = Math.floor(i / 6 * (2 * m + 1)),
                            g = this.grid[p][f];
                            g.linked = !0,
                            g.setSusceptible(),
                            d.add(g)
                        }
                        if (this.props.modelKnowledgeGrowth) {
                            var v = this.props.inventorDistance;
                            c = Math.floor(1 * n / v),
                            h = Math.floor(1 * n / v);
                            var w = this.grid[Math.floor(1 * n / v)][Math.floor(1 * n / v)],
                            y = this.grid[Math.floor(1 * n / v)][Math.floor((v - 1) * n / v)],
                            b = this.grid[Math.floor((v - 1) * n / v)][Math.floor((v - 1) * n / v)],
                            E = this.grid[Math.floor((v - 1) * n / v)][Math.floor(1 * n / v)];
                            w.setKnowledgeLevel(1),
                            y.setKnowledgeLevel(2),
                            b.setKnowledgeLevel(3),
                            E.setKnowledgeLevel(4)
                        } else c = null,
                        h = null;
                        if (this.props.reinfectionsAllowed && this.updateRemovedCells(0, d), this.props.modelScience && t.updateRealScientists(this.grid, this.state.realScientistFraction, 0, this.rng), this.props.addCities) {
                            var k = [];
                            k.push([Math.floor(.75 * n), Math.floor(.25 * i)]),
                            k.push([Math.floor(.25 * n), Math.floor(.75 * i)]);
                            for (var S = 0; S < n; S++) for (var I = 0; I < i; I++) for (var x = 0; x < k.length; x++) {
                                var T = k[x],
                                P = T[0],
                                C = T[1],
                                A = Math.sqrt(Math.pow(P - S, 2) + Math.pow(C - I, 2));
                                A <= 16 && (this.grid[S][I].specialDegree = 8 - Math.floor(A / 4))
                            }
                        }
                        if (this.props.addMediaOutlets) for (var N = 0; N < 6; N++) for (var O = 0; O < 6; O++) {
                            var R = Math.floor(n / 12 * (2 * N + 1)),
                            F = Math.floor(i / 12 * (2 * O + 1));
                            this.grid[R][F].setMediaOutlet()
                        }
                        var M = Math.floor((n - 1) / 2),
                        z = Math.floor((i - 1) / 2);
                        if (this.props.modelScience) for (var D = -4; D <= 4; D++) for (var j = -4; j <= 4; j++) {
                            var B = this.grid[M + D][z + j];
                            B.setInfected(B.isRealScientist() ? "REAL": "FAKE", 1)
                        } else if (this.props.modelKnowledgeGrowth) {
                            if (null !== c && null !== h && 20 === this.props.nug) for (var L = -2; L <= 2; L++) for (var W = -2; W <= 2; W++) 2 === Math.abs(L) && 2 === Math.abs(W) || this.grid[c + L][h + W].setInfected("1", 1)
                        } else if (1 === this.props.nug) this.grid[M][z].setInfected("REAL", 1);
                        else if (20 === this.props.nug) for (var _ = -2; _ <= 2; _++) for (var K = -2; K <= 2; K++) 2 === Math.abs(_) && 2 === Math.abs(K) || this.grid[M + _][z + K].setInfected("REAL", 1);
                        this.redraw(!0),
                        this.setState({
                            numActiveNodes: this.props.nug
                        })
                    }
                }
            },
            {
                key: "simulateStep",
                value: function() {
                    for (var e = this.props.gridRows,
                    a = this.props.gridCols,
                    n = 0,
                    i = 0,
                    r = new Set,
                    o = 0; o < e; o++) for (var s = 0; s < a; s++) {
                        var l = this.grid[o][s];
                        l.savePreviousState(),
                        l.resetInfectionWeight(),
                        l.isInfected() && (this.props.reinfectionsAllowed ? l.setSusceptible() : l.setRemoved()),
                        l.isRemoved() && n++,
                        l.isRealScientist() && i++,
                        this.state.longDistaceNetworkActive && l.linked && r.add(l)
                    }
                    this.props.reinfectionsAllowed && this.updateRemovedCells(n, r),
                    this.props.modelScience && t.updateRealScientists(this.grid, this.state.realScientistFraction, i, this.rng);
                    for (var c = 0; c < e; c++) for (var h = 0; h < a; h++) {
                        var d = this.grid[c][h];
                        d.wasInfected() && this.tryInfectingNeighbors(d, c, h, r)
                    }
                    if (this.state.vacuumProbability > 0) for (var u = 0; u < e; u++) for (var m = 0; m < a; m++) {
                        var p = this.grid[u][m];
                        p.isSusceptible() && this.rng.random() < this.state.vacuumProbability && p.setInfected("REAL", 1)
                    }
                    for (var f = 0,
                    g = 0; g < e; g++) for (var v = 0; v < a; v++) {
                        this.grid[g][v].isInfected() && f++
                    }
                    this.setState({
                        numActiveNodes: f,
                        playing: this.state.playing && (0 !== f || this.state.vacuumProbability > 0)
                    });
                    var w = this.state.maxActiveNodes;
                    if ( - 1 !== w && f > w) for (var y = f - w,
                    b = f,
                    E = 0; E < e; E++) for (var k = 0; k < a; k++) {
                        var S = this.grid[E][k];
                        if (S.isInfected()) this.rng.random() < y / b && (S.setSusceptible(), y--),
                        b--
                    }
                    this.redraw(!0)
                }
            },
            {
                key: "updateRemovedCells",
                value: function(e, t) {
                    var a = this.grid.length,
                    n = this.grid[0].length,
                    i = Math.floor(a * n * this.state.immunityFraction) - e;
                    if (i > 0) for (var r = a * n - e - t.size,
                    o = 0; o < a; o++) for (var s = 0; s < n; s++) {
                        var l = this.grid[o][s];
                        if (!l.isRemoved() && l.isAllowedToBeRemoved()) this.rng.random() < Math.abs(i) / r && (l.setRemoved(), i--),
                        r--
                    } else if (i < 0) for (var c = e,
                    h = 0; h < a; h++) for (var d = 0; d < n; d++) {
                        var u = this.grid[h][d];
                        if (u.isRemoved()) this.rng.random() < Math.abs(i) / c && (u.setSusceptible(), i++),
                        c--
                    }
                }
            },
            {
                key: "tryInfectingNeighbors",
                value: function(e, t, a, n) {
                    var i = this.getNeighbors(e, t, a, n),
                    r = this.state.transmissionProbability;
                    if (this.state.networkEffectStrength > 0) {
                        var o = i.length,
                        s = 0,
                        l = !0,
                        c = !1,
                        h = void 0;
                        try {
                            for (var d, u = i[Symbol.iterator](); ! (l = (d = u.next()).done); l = !0) {
                                d.value.wasInfected() && s++
                            }
                        } catch(y) {
                            c = !0,
                            h = y
                        } finally {
                            try {
                                l || null == u.
                                return || u.
                                return ()
                            } finally {
                                if (c) throw h
                            }
                        }
                        r = r + r / o * (s - o / 2) * this.state.networkEffectStrength
                    }
                    var m = !0,
                    p = !1,
                    f = void 0;
                    try {
                        for (var g, v = i[Symbol.iterator](); ! (m = (g = v.next()).done); m = !0) {
                            var w = g.value;
                            e.tryToInfect(w, r, this.props.modelScience, this.state.scientistPreferenceForTruth, this.state.careeristPreferenceForTruth)
                        }
                    } catch(y) {
                        p = !0,
                        f = y
                    } finally {
                        try {
                            m || null == v.
                            return || v.
                            return ()
                        } finally {
                            if (p) throw f
                        }
                    }
                }
            },
            {
                key: "getNeighbors",
                value: function(e, a, n, i) {
                    var r = this.grid.length,
                    o = this.grid[0].length,
                    s = [];
                    if (e.isMediaOutlet()) for (var l = -15; l <= 15; l++) for (var c = -15; c <= 15; c++) {
                        var h = a + l,
                        d = n + c;
                        if (h >= 0 && h < r && d >= 0 && d < o) Math.sqrt(Math.pow(h - a, 2) + Math.pow(d - n, 2)) <= 15 && s.push(this.grid[h][d])
                    } else {
                        var u = this.state.degree;
                        this.props.addCities && null !== e.specialDegree && (u = e.specialDegree);
                        for (var m = -1,
                        p = 0,
                        f = t.NEIGHBOR_CLASSES[p].slice(0); m < u;) {
                            m++,
                            0 === f.length && (p++, f = t.NEIGHBOR_CLASSES[p].slice(0), t.shuffleInPlace(f, this.rng));
                            var g = f.pop(),
                            v = a + g[0],
                            w = n + g[1];
                            v >= 0 && v < r && w >= 0 && w < o && s.push(this.grid[v][w])
                        }
                    }
                    if (e.linked && this.state.longDistaceNetworkActive) {
                        var y = !0,
                        b = !1,
                        E = void 0;
                        try {
                            for (var k, S = i[Symbol.iterator](); ! (y = (k = S.next()).done); y = !0) {
                                var I = k.value;
                                s.push(I)
                            }
                        } catch(x) {
                            b = !0,
                            E = x
                        } finally {
                            try {
                                y || null == S.
                                return || S.
                                return ()
                            } finally {
                                if (b) throw E
                            }
                        }
                    }
                    return s
                }
            },
            {
                key: "togglePlayback",
                value: function() {
                    0 === this.state.numActiveNodes && 0 === this.state.vacuumProbability && this.generate(!0),
                    this.setState({
                        playing: !this.state.playing
                    })
                }
            },
            {
                key: "redraw",
                value: function(e) {
                    if (null !== this.canvas && void 0 !== this.canvas) {
                        var t = [this.network, this.state.drawNodeOutlines, this.state.longDistaceNetworkActive];
                        if (e || !q.arraysEqual(this.previousDrawingParams, t)) {
                            this.previousDrawingParams = t;
                            var a = this.canvas.getContext("2d");
                            a.fillStyle = "#FFF",
                            a.fillRect(0, 0, this.gridWidth, this.gridWidth);
                            for (var n = 0; n < this.grid.length; n++) for (var i = 0; i < this.grid[n].length; i++) {
                                var r = this.grid[n][i];
                                this.drawCell(n, i, r, a)
                            }
                        }
                    } else console.log("no canvas")
                }
            },
            {
                key: "drawCell",
                value: function(e, a, n, i) {
                    var r = this.nodeSize,
                    o = e * r,
                    s = a * r;
                    if (n.isInfected())"REAL" === n.getInfectionType() ? i.fillStyle = t.INFECTED_COLOR: "1" === n.getInfectionType() || "2" === n.getInfectionType() || "3" === n.getInfectionType() || "4" === n.getInfectionType() ? i.fillStyle = n.getInfectionTypeColor() : i.fillStyle = "#F66";
                    else if (n.isRemoved()) i.fillStyle = t.REMOVED_COLOR;
                    else {
                        if (i.fillStyle = t.SUSCEPTIBLE_COLOR, this.props.modelScience) n.isRealScientist() ? i.fillStyle = "#DDF": i.fillStyle = "#FDD";
                        else if (null !== n.specialDegree) {
                            q.assert(n.specialDegree >= 4 && n.specialDegree <= 8, "node.specialDegree should be between 4 and 8; was: " + n.specialDegree);
                            var l = (n.specialDegree - 4) / 4;
                            i.fillStyle = _.hex(_.blend(_.makeHex(t.SUSCEPTIBLE_COLOR), _.makeHex("#BBB"), l))
                        }
                        this.props.modelKnowledgeGrowth && (i.fillStyle = n.getKnowledgeLevelColor())
                    }
                    var c = 1; (this.nodeSize < 5 || this.nodeSize < this.props.nodeSize) && (c = 0),
                    i.fillRect(s, o, r - c, r - c),
                    n.linked && this.state.longDistaceNetworkActive || n.isMediaOutlet() ? (i.lineWidth = 1, i.strokeStyle = "#484", i.strokeRect(s + .5, o + .5, r - c, r - c)) : this.props.modelKnowledgeGrowth && null !== n.getKnowledgeLevel() && (i.lineWidth = 2, i.strokeStyle = n.getKnowledgeLevelColor(), i.strokeRect(s + .5, o + .5, r - c, r - c))
                }
            },
            {
                key: "renderSlider",
                value: function(e, a, n, r, o, s, l, c) {
                    var h;
                    h = 0 === l ? "": l ? i.a.createElement("span", null, "\xa0\xa0\xa0\xa0\xa0", t.renderPercentage(a)) : i.a.createElement("span", null, "\xa0\xa0\xa0\xa0\xa0", i.a.createElement("strong", null, Math.round(100 * a) / 100));
                    return i.a.createElement("div", {
                        className: "slider-container"
                    },
                    i.a.createElement("div", {
                        className: "slider-name"
                    },
                    e, h), i.a.createElement("div", {
                        className: "slider-slider"
                    },
                    i.a.createElement(X.a, {
                        classes: {
                            container: "slider-slider-container",
                            thumbIconWrapper: ""
                        },
                        min: r,
                        max: o,
                        step: s,
                        value: a,
                        onChange: n
                    })), i.a.createElement("div", {
                        className: "slider-minus"
                    },
                    i.a.createElement(re, {
                        size: "small",
                        onClick: function() {
                            return n(null, Math.max(a - s, r))
                        }
                    },
                    i.a.createElement("span", {
                        className: "plus-minus-button"
                    },
                    "\u2013"))), i.a.createElement("div", {
                        className: "slider-plus"
                    },
                    i.a.createElement(re, {
                        size: "small",
                        onClick: function() {
                            return n(null, Math.min(a + s, o))
                        }
                    },
                    i.a.createElement("span", {
                        className: "plus-minus-button"
                    },
                    "+"))))
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this;
                    this.generate(),
                    this.redraw();
                    var t = this.props.showAllControls,
                    a = null; (t || this.props.showTransmissionProbabilitySlider) && (a = this.renderSlider("Transmission rate", this.state.transmissionProbability,
                    function(t, a) {
                        e.setState({
                            transmissionProbability: a
                        })
                    },
                    0, 1, .01, !0, "transmissionRate" === this.props.highlight));
                    var n = null;
                    if (t || this.props.showVacuumProbabilitySlider) {
                        var r = 1 / (this.props.gridRows * this.props.gridCols) * 1 / 5,
                        o = r / 100;
                        n = this.renderSlider("Spontaneous activation rate", this.state.vacuumProbability,
                        function(t, a) {
                            e.setState({
                                vacuumProbability: a
                            })
                        },
                        0, r, o, 0, "vacuum" === this.props.highlight)
                    }
                    var s = null;
                    if (t || this.props.showImmunityFractionSlider) {
                        var l = this.props.immunitySliderName || "Immunity";
                        s = this.renderSlider(l, this.state.immunityFraction,
                        function(t, a) {
                            e.setState({
                                immunityFraction: a
                            })
                        },
                        0, 1, .01, !0, "immunity" === this.props.highlight)
                    }
                    var c = null; (t || this.props.showDegreeSlider) && (c = this.renderSlider("Degree", this.state.degree,
                    function(t, a) {
                        e.setState({
                            degree: a
                        })
                    },
                    1, 8, 1, !1, "degree" === this.props.highlight));
                    var h = null,
                    d = null; (t || this.props.maxActiveNodes > 0) && (h = this.renderSlider("Max active nodes", this.state.maxActiveNodes,
                    function(t, a) {
                        e.setState({
                            maxActiveNodes: a
                        })
                    },
                    1, this.props.gridRows * this.props.gridCols / 10, 1, !1, !1), d = this.renderSlider("Network effect", this.state.networkEffectStrength,
                    function(t, a) {
                        e.setState({
                            networkEffectStrength: a
                        })
                    },
                    0, 3, 1, !1, !1));
                    var u = null;
                    if (t || this.props.showPlaybackControls) {
                        var m = i.a.createElement(re, {
                            onClick: function() {
                                e.setState({
                                    playing: !1
                                }),
                                e.generate(!0),
                                e.forceUpdate()
                            }
                        },
                        "Reset"),
                        p = i.a.createElement("span", {
                            style: {
                                fontSize: "10pt"
                            }
                        },
                        "\u25b7");
                        this.state.playing && (p = i.a.createElement("span", null, i.a.createElement("b", null, "||")));
                        var f = i.a.createElement(re, {
                            highlighted: !this.state.playing,
                            onClick: function() {
                                e.togglePlayback()
                            }
                        },
                        p),
                        g = i.a.createElement(re, {
                            onClick: function() {
                                e.simulateStep(),
                                e.setState({
                                    playing: !1
                                })
                            }
                        },
                        "Step");
                        u = i.a.createElement("div", {
                            className: "playback-controls-container"
                        },
                        m, f, g)
                    }
                    var v = null;
                    if (this.props.addLinkedNodes) {
                        var w = "Long distance: disabled";
                        this.state.longDistaceNetworkActive && (w = "Long distance: enabled"),
                        v = i.a.createElement("div", null, i.a.createElement("span", {
                            onClick: function() {
                                e.setState({
                                    longDistaceNetworkActive: !e.state.longDistaceNetworkActive
                                })
                            }
                        },
                        w))
                    }
                    var y = null;
                    if (this.props.showAliveFraction || t) {
                        var b = this.state.numActiveNodes / (this.props.gridRows * this.props.gridCols);
                        y = i.a.createElement("div", null, i.a.createElement(X.a, {
                            style: {
                                height: this.gridWidth,
                                marginLeft: "0.5rem"
                            },
                            classes: {
                                track: {
                                    color: "pink",
                                    width: 50,
                                    height: 100
                                },
                                thumb: {
                                    display: "none"
                                }
                            },
                            min: 0,
                            max: 1,
                            value: b,
                            thumb: i.a.createElement("span", null),
                            vertical: !0
                        }))
                    }
                    var E = null,
                    k = null,
                    S = null;
                    this.props.modelScience && (E = this.renderSlider("Real scientists", this.state.realScientistFraction,
                    function(t, a) {
                        e.setState({
                            realScientistFraction: a
                        })
                    },
                    0, 1, .01, !0, !1), k = this.renderSlider("Scientist truth pref", this.state.scientistPreferenceForTruth,
                    function(t, a) {
                        e.setState({
                            scientistPreferenceForTruth: a
                        })
                    },
                    0, 1, .01, !0, !1), S = this.renderSlider("Careerist truth pref", this.state.careeristPreferenceForTruth,
                    function(t, a) {
                        e.setState({
                            careeristPreferenceForTruth: a
                        })
                    },
                    0, 1, .01, !0, !1));
                    var I = null;
                    this.props.showProTip && (I = i.a.createElement("div", {
                        style: {
                            color: "#666",
                            fontSize: "12pt",
                            marginTop: "1em"
                        }
                    },
                    "\ud83d\udc46 Pro-tip: You can adjust any slider while the simulation is running."));
                    var x = 1e3 * (1 - Math.pow(this.state.speed, .2)),
                    T = null;
                    return "transmissionRate" === this.props.highlight ? (T = a, a = null) : "vacuum" === this.props.highlight ? (T = n, n = null) : "degree" === this.props.highlight ? (T = c, c = null) : "immunity" === this.props.highlight && (T = s, s = null),
                    i.a.createElement("div", {
                        className: "widget-container",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    },
                    i.a.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row"
                        }
                    },
                    i.a.createElement(Q.a, {
                        onEnter: this.onEnter,
                        onLeave: this.onLeave,
                        scrollableAncestor: window
                    },
                    i.a.createElement("canvas", {
                        ref: this.canvasRef,
                        width: this.gridWidth,
                        height: this.gridWidth
                    })), y), u, i.a.createElement("div", {
                        style: {
                            height: "0.5em"
                        }
                    }), T, a, s, n, c, h, v, d, E, k, S, I, i.a.createElement($, {
                        milliseconds: x,
                        callback: this.onTick
                    }))
                }
            }], [{
                key: "shuffleInPlace",
                value: function(e, t) {
                    for (var a = e.length - 1; a > 0; a--) {
                        var n = Math.floor(t.random() * (a + 1)),
                        i = [e[n], e[a]];
                        e[a] = i[0],
                        e[n] = i[1]
                    }
                    return e
                }
            },
            {
                key: "updateRealScientists",
                value: function(e, t, a, n) {
                    var i = e.length,
                    r = e[0].length,
                    o = Math.floor(t * i * r);
                    if (o !== a) {
                        var s = Math.abs(o - a),
                        l = 1,
                        c = null;
                        o > a ? (l = 1, c = i * r - a) : (l = -1, c = a);
                        for (var h = 0; h < i; h++) for (var d = 0; d < r; d++) {
                            var u = e[h][d];
                            if (1 === l ? !u.isRealScientist() : u.isRealScientist()) n.random() < s / c && (u.setRealScientist(!u.isRealScientist()), s--),
                            c--
                        }
                    }
                }
            },
            {
                key: "renderPercentage",
                value: function(e) {
                    var t = Math.round(100 * e);
                    return i.a.createElement("span", null, i.a.createElement("strong", null, t), "%")
                }
            }]),
            t
        } (n.Component);
        se.NEIGHBOR_CLASSES = [[[0, 0]], [[ - 1, 0], [1, 0], [0, -1], [0, 1]], [[ - 1, -1], [ - 1, 1], [1, -1], [1, 1]], [[ - 2, -2], [ - 2, -1], [ - 2, 0], [ - 2, 1], [ - 2, 2], [ - 1, 2], [0, 2], [1, 2], [2, 2], [2, 1], [2, 0], [2, -1], [2, -2], [1, -2], [0, -2], [ - 1, -2]]],
        se.INFECTED_COLOR = "#48F",
        se.SUSCEPTIBLE_COLOR = "#EEE",
        se.REMOVED_COLOR = "#C5C5C5",
        se.defaultProps = {
            randomSeed: -1,
            addCities: !1,
            addLinkedNodes: !1,
            addMediaOutlets: !1,
            degree: 4,
            gridCols: 1,
            gridRows: 1,
            immunityFraction: 0,
            maxActiveNodes: -1,
            maxIterations: -1,
            nug: 20,
            reinfectionsAllowed: !0,
            transmissionProbability: .3,
            vacuumProbability: 0,
            careeristPreferenceForTruth: .5,
            inventorDistance: 4,
            modelKnowledgeGrowth: !1,
            modelScience: !1,
            realScientistFraction: 0,
            scientistPreferenceForTruth: 1,
            drawNodeOutlines: !0,
            speed: .5,
            immunitySliderName: "Immunity",
            showAliveFraction: !1,
            showAllControls: !1,
            showDegreeSlider: !1,
            showImmunityFractionSlider: !1,
            showPlaybackControls: !1,
            showProTip: !1,
            showSimulationButtons: !1,
            showSpeedControls: !1,
            showTransmissionProbabilitySlider: !1,
            showVacuumProbabilitySlider: !1
        };
        var le = function(e) {
            function t(e) {
                return Object(s.a)(this, t),
                Object(c.a)(this, Object(h.a)(t).call(this, e))
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "render",
                value: function() {
                    var e = null;
                    null !== this.props.title && void 0 !== this.props.title && (e = i.a.createElement("div", {
                        className: "figure-title"
                    },
                    this.props.title));
                    var t = null;
                    null !== this.props.caption && void 0 !== this.props.caption && (t = i.a.createElement("div", {
                        className: "figure-caption"
                    },
                    this.props.caption));
                    var a = "figure-body";
                    return this.props.image && (a = "figure-body image"),
                    i.a.createElement("div", {
                        className: "figure-container"
                    },
                    e, i.a.createElement("div", {
                        className: a
                    },
                    this.props.children), t)
                }
            }]),
            t
        } (n.Component),
        ce = function(e) {
            function t(e) {
                var a;
                return Object(s.a)(this, t),
                (a = Object(c.a)(this, Object(h.a)(t).call(this, e))).state = {
                    expanded: !1
                },
                a
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "render",
                value: function() {
                    var e = this,
                    t = null,
                    a = "",
                    n = "+";
                    return this.state.expanded && (t = i.a.createElement("div", {
                        className: "aside-content"
                    },
                    this.props.children), a = " expanded", n = "\u2013"),
                    i.a.createElement("div", {
                        className: "aside-container" + a,
                        onClick: function() {
                            e.setState({
                                expanded: !e.state.expanded
                            })
                        }
                    },
                    i.a.createElement("div", {
                        className: "aside-teaser"
                    },
                    "[", i.a.createElement("span", {
                        style: {
                            fontFamily: "monospace"
                        }
                    },
                    n), "] ", this.props.teaser), t)
                }
            }]),
            t
        } (n.Component),
        he = function(e) {
            function t(e) {
                var a;
                return Object(s.a)(this, t),
                (a = Object(c.a)(this, Object(h.a)(t).call(this, e))).state = {
                    survivorshipWidgetGens: 10,
                    criticalThresholdVisible: !1,
                    addendumVisible: !1
                },
                a
            }
            return Object(d.a)(t, e),
            Object(l.a)(t, [{
                key: "renderMainPost",
                value: function() {
                    var e, t, a = this;
                    e = this.state.criticalThresholdVisible ? "spoiler-revealed": "spoiler",
                    t = i.a.createElement("label", null, i.a.createElement("span", {
                        style: {
                            cursor: "pointer"
                        }
                    },
                    i.a.createElement("input", {
                        type: "checkbox",
                        value: this.state.criticalThresholdVisible,
                        onChange: function(e) {
                            a.setState({
                                criticalThresholdVisible: e.target.checked
                            })
                        }
                    }), " Show spoilers"));
                    var n = i.a.createElement("code", {
                        className: "code-susceptible"
                    },
                    "Susceptible"),
                    r = i.a.createElement("code", {
                        className: "code-infected"
                    },
                    "Infected"),
                    o = i.a.createElement("code", {
                        className: "code-removed"
                    },
                    "Removed");
                    return i.a.createElement("div", {
                        className: "post-content"
                    },










                    i.a.createElement("div", null, i.a.createElement("h3", null, "SIR vs. SIS")), i.a.createElement("div", null, "In the simulation below, you can vary the ", i.a.createElement("b", null, "transmission rate"), " using the slider at the bottom:"), i.a.createElement(le, null, i.a.createElement(se, {
                        degree: 4,
                        gridRows: 19,
                        gridCols: 19,
                        highlight: "transmissionRate",
                        nodeSize: 20,
                        nug: 1,
                        randomSeed: 100,
                        reinfectionsAllowed: !1,
                        showPlaybackControls: !0,
                        showTransmissionProbabilitySlider: !0,
                        transmissionProbability: .5
                    })), i.a.createElement("div", null, "This is what's called an ", i.a.createElement("b", null, "SIR model"), ". The initials stand for the three different states a node can be in:"), i.a.createElement("div", null, i.a.createElement("ul", null, i.a.createElement("li", null, i.a.createElement(oe, {
                        type: "susceptible"
                    }), " \xa0", i.a.createElement("b", null, "Susceptible")), i.a.createElement("li", null, i.a.createElement(oe, {
                        type: "infected"
                    }), " \xa0", i.a.createElement("b", null, "Infected")), i.a.createElement("li", null, i.a.createElement(oe, {
                        type: "removed"
                    }), " \xa0", i.a.createElement("b", null, "Removed")))), i.a.createElement("div", null, "Here's how it works:"), i.a.createElement("div", null, i.a.createElement("ol", null, i.a.createElement("li", null, "Nodes start out as ", n, ", except for a few nodes (like the center node above) which start as ", r, "."), i.a.createElement("li", null, "At each time step, ", r, " nodes get a chance to pass the infection along to each of their ", n, " neighbors, with a probability equal to the transmission rate."), i.a.createElement("li", null, r, " nodes then transition to the ", o, " state, indicating that they're no longer capable of infecting others or being infected again themselves."))), i.a.createElement("div", null, "In a disease context, ", o, " may mean that the person has died ", i.a.createElement("em", null, "or"), " that they've developed an immunity to the pathogen. Regardless, we say that they're \"removed\" from the simulation because nothing ever happens to them again."), 
                    
                    i.a.createElement("div", null, "Now, depending on what we're trying to simulate, we may need something other than an SIR model."), i.a.createElement("div", null, "If we're simulating the spread of measles or an outbreak of wildfire, SIR is perfect. But suppose we're simulating the adoption of a new cultural practice, e.g., meditation. At first a node (person) is ", n, ", because they've never done it before. Then, if they start meditating (perhaps after hearing about it from a friend), we would model them as ", r, ". But if they stop practicing, they don't die or drop out of the simulation, because they could easily pick up the habit again in the future. So they transition back to the ", n, " state."), i.a.createElement("div", null, "This is an ", i.a.createElement("b", null, "SIS simulation"), " \u2014 which (you guessed it) stands for ", i.a.createElement("b", null, "Susceptible\u2013Infected\u2013Susceptible"), ". Here's what it looks like on a grid:"), i.a.createElement(le, null, i.a.createElement(se, {
                        degree: 4,
                        gridRows: 19,
                        gridCols: 19,
                        highlight: "transmissionRate",
                        nodeSize: 20,
                        nug: 1,
                        randomSeed: 100,
                        reinfectionsAllowed: !0,
                        showPlaybackControls: !0,
                        showProTip: !0,
                        showTransmissionProbabilitySlider: !0,
                        transmissionProbability: .35
                    })), i.a.createElement(ce, {
                        teaser: "Implementation details"
                    },
                    "SIS models classically have two parameters: a ", i.a.createElement("em", null, "transmission rate"), " and a ", i.a.createElement("em", null, "recovery rate"), ". In these simulations, however, I've chosen to simplify by omitting the recovery rate parameter. Instead, an ", r, " node will automatically transition back to ", n, " in the next time step, ", i.a.createElement("em", null, "unless"), " it happens to get infected by one of its neighbors. Additionally, we allow a node that's infected at step ", i.a.createElement("em", null, "n"), " to infect ", i.a.createElement("em", null, "itself"), " at step ", i.a.createElement("em", null, "n+1"), ", with probability equal to the transmission rate."), i.a.createElement("div", null, i.a.createElement("h5", null, "Discussion")), i.a.createElement("div", null, "As you can see, this plays out very different from the SIR model."), i.a.createElement("div", null, "Because the nodes never get used up (", o, "), even a very small and finite grid can sustain an SIS infection for a long time. The infection simply hops around from node to node and eventually back again."), i.a.createElement("div", null, "Despite their differences, SIR and SIS turn out to be surprisingly interchangeable for our purposes today (namely: developing intuition). So we're going to anchor on SIS for the remainder of this essay \u2014\xa0mostly because it dances around longer and is therefore more fun."),
                    )
                }
            },
            {
                key: "renderSubscribeForm",
                value: function() {
                    return i.a.createElement("form", {
                        method: "post",
                        action: "https://meltingasphalt.us8.list-manage.com/subscribe/post?u=0bc9d741e167733d20c520ea6&id=57ebd9b4a6",
                        id: "mc4wp-form-1",
                        className: "form mc4wp-form"
                    },
                    i.a.createElement("input", {
                        type: "email",
                        id: "mc4wp_email",
                        name: "EMAIL",
                        placeholder: "Enter your email",
                        required: !0
                    }), i.a.createElement("input", {
                        type: "submit",
                        value: "Subscribe"
                    }), i.a.createElement("textarea", {
                        name: "_mc4wp_required_but_not_really",
                        style: {
                            display: "none"
                        }
                    }), i.a.createElement("input", {
                        type: "hidden",
                        name: "_mc4wp_form_submit",
                        value: "1"
                    }), i.a.createElement("input", {
                        type: "hidden",
                        name: "_mc4wp_form_instance",
                        value: "1"
                    }), i.a.createElement("input", {
                        type: "hidden",
                        name: "_mc4wp_form_nonce",
                        value: "8a45344b67"
                    }))
                }
            },
            {
                key: "renderAddendum",
                value: function() {
                    var e = this;
                    return this.state.addendumVisible ? i.a.createElement("div", null, i.a.createElement("div", null, i.a.createElement("h3", null, "Addendum")), i.a.createElement("div", null, "\xa0"), i.a.createElement("div", null, i.a.createElement("h5", null, "Mail networks")), i.a.createElement(le, null, i.a.createElement(se, {
                        addLinkedNodes: !0,
                        degree: 4,
                        gridRows: 100,
                        gridCols: 100,
                        nodeSize: 5,
                        showAllControls: !0
                    })), i.a.createElement("div", null, i.a.createElement("h5", null, "Percolation")), i.a.createElement(le, null, i.a.createElement(se, {
                        degree: 4,
                        gridRows: 201,
                        gridCols: 201,
                        highlight: "immunity",
                        immunityFraction: .45,
                        nodeSize: 2,
                        nug: 20,
                        randomSeed: 101,
                        reinfectionsAllowed: !0,
                        showImmunityFractionSlider: !0,
                        showPlaybackControls: !0,
                        showSpeedControls: !0,
                        showTransmissionProbabilitySlider: !0,
                        speed: 1,
                        transmissionProbability: 1
                    })), i.a.createElement(le, null, i.a.createElement(se, {
                        degree: 4,
                        gridRows: 201,
                        gridCols: 201,
                        highlight: "immunity",
                        immunityFraction: 0,
                        nodeSize: 2,
                        nug: 20,
                        randomSeed: 101,
                        reinfectionsAllowed: !1,
                        showImmunityFractionSlider: !0,
                        showPlaybackControls: !0,
                        showSpeedControls: !0,
                        showTransmissionProbabilitySlider: !0,
                        speed: 1,
                        transmissionProbability: .5
                    })), i.a.createElement("div", null, i.a.createElement("h5", null, "Critical conversations")), i.a.createElement("div", null, 'People often speak of "conversational chemistry." But that\'s a missed opportunity, IMO, to use a much richer metaphor: the ', i.a.createElement("em", null, "conversational nuclear reaction"), "."), i.a.createElement("div", null, 'We\u2019ve all participated (I hope) in conversations that seem to have "gone critical" \u2014 each topic leading to >1 further topics to explore. I\'d like to push this metaphor further, to suggest that amazing conversations are often the result of two subcritical networks coming together, like hunks of enriched uranium, to create a single supercritical network.'), i.a.createElement("div", null, "Suppose we model conversation as a pattern of activation on a network where nodes represent topics. For example, here's a very crude set of topics that might be linked in a network:"), i.a.createElement(le, {
                        image: !0
                    },
                    i.a.createElement("img", {
                        src: O.a,
                        width: 400,
                        alt: ""
                    })), i.a.createElement("div", null, "Of course, a real conversational network would have vastly more nodes, and they would be a lot more fine-grained. But this should be enough to get the point across."), i.a.createElement("div", null, "... the point being that each participant to the conversation brings their own connections between the topics. My brain might make these connections, for instance:"), i.a.createElement(le, {
                        image: !0
                    },
                    i.a.createElement("img", {
                        src: F.a,
                        width: 400,
                        alt: ""
                    })), i.a.createElement("div", null, "While your brain make theses connections:"), i.a.createElement(le, {
                        image: !0
                    },
                    i.a.createElement("img", {
                        src: z.a,
                        width: 400,
                        alt: ""
                    })), i.a.createElement("div", null, "And, crucially, when the two of us come together for a conversation, our ", i.a.createElement("em", null, "shared"), " network has a higher average degree than either of our individual networks:"), i.a.createElement(le, {
                        image: !0
                    },
                    i.a.createElement("img", {
                        src: j.a,
                        width: 400,
                        alt: ""
                    })), i.a.createElement("div", null, "So for instance, I might bring up topic A, and that might remind you of something to say in topic B. If A-to-B is a connection that ", i.a.createElement("em", null, "that my brain wouldn't have made"), ", then its an indication that our shared network is richer than our networks in isolation, and therefore more likely to go critical."), i.a.createElement("div", null, "A conversational path that seems like a dead-end in your own network might tap into a rich vein of connections in your friend\u2019s network, and vice versa."), i.a.createElement(le, null, i.a.createElement(se, {
                        degree: 4,
                        gridRows: 59,
                        gridCols: 59,
                        maxActiveNodes: 8,
                        nodeSize: 8,
                        nug: 20,
                        randomSeed: 100,
                        reinfectionsAllowed: !0,
                        showPlaybackControls: !0,
                        showSpeedControls: !0,
                        showTransmissionProbabilitySlider: !0,
                        speed: .8,
                        transmissionProbability: .8
                    })), i.a.createElement("div", null, 'What makes a conversation go critical? Being open-minded, eager, curious \u2014\xa0willing to play along and explore whatever topics your partner brings up. If you find certain topics boring, such that you clam up and have nothing to say when your partner introduces them, you\'re raising the number of dead or "immune" nodes in the network, putting a damper on the conversation.')) : i.a.createElement("div", null, i.a.createElement("a", {
                        onClick: function() {
                            e.setState({
                                addendumVisible: !0
                            })
                        }
                    },
                    "Show addendum"))
                }
            },
            {
                key: "renderEndOfPostDivider",
                value: function(e) {
                    var t = "",
                    a = i.a.createElement("span", null, "\u2014\u2014");
                    return e && (t = "Originally published May 13, 2019.", a = i.a.createElement("img", {
                        src: "https://meltingasphalt.com/wp-content/themes/responsive/core/images/flourish.svg",
                        width: 50,
                        alt: "\u2014\u2014"
                    })),
                    i.a.createElement("div", {
                        style: {
                            textAlign: "center"
                        }
                    },
                    i.a.createElement("div", {
                        className: "end-of-post-divider"
                    },
                    a), i.a.createElement("div", {
                        className: "signature-line"
                    },
                    t))
                }
            },
            {
                key: "renderHeader",
                value: function() {
                    return i.a.createElement("div", {
                        id: "header"
                    },
                    i.a.createElement("div", {
                        id: "logo",
                        className: "branded"
                    },
                    i.a.createElement("span", {
                        className: "site-name"
                    },
                   )))
                }
            },
            {
                key: "render",
                value: function() {
                    return i.a.createElement("div", {
                        className: "main-container"
                    },
                    // i.a.createElement("div", {
                    //     className: "header"
                    // },
                    // this.renderheader(),
                    
                    // ),
                     i.a.createElement("div", {
                        className: "blank-l"
                    }), i.a.createElement("div", {
                        className: "content"
                    },
                    this.renderMainPost()), i.a.createElement("div", {
                        className: "blank-r"
                    }), i.a.createElement("div", {
                        className: "footer"
                    })
                        
                    )
                }
            }]),
            t
        } (n.Component);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        o.a.render(i.a.createElement(he, null), document.getElementById("root")),
        "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
        })
    },
    32 : function(e, t, a) {},
    63 : function(e, t, a) {
        e.exports = a.p + "static/media/equivalence.5f299fc9.png"
    },
    64 : function(e, t, a) {
        e.exports = a.p + "static/media/firebreaks.4bc08931.jpg"
    },
    65 : function(e, t, a) {
        e.exports = a.p + "static/media/kgrowth1.c5d175a7.png"
    },
    66 : function(e, t, a) {
        e.exports = a.p + "static/media/kgrowth2.dc421170.png"
    },
    67 : function(e, t, a) {
        e.exports = a.p + "static/media/network_diagram.a96ce813.png"
    },
    68 : function(e, t, a) {
        e.exports = a.p + "static/media/nuclear_chain_reaction.844f76a8.png"
    },
    69 : function(e, t, a) {
        e.exports = a.p + "static/media/sis-transmission.fed57074.png"
    },
    70 : function(e, t, a) {
        e.exports = a.p + "static/media/the_loop.a22b5544.png"
    },
    71 : function(e, t, a) {
        e.exports = a.p + "static/media/the_loop2.85412b5e.png"
    },
    72 : function(e, t, a) {
        e.exports = a.p + "static/media/topics.ce7f60aa.png"
    },
    73 : function(e, t, a) {
        e.exports = a.p + "static/media/topics_person1.3b30ab2f.png"
    },
    74 : function(e, t, a) {
        e.exports = a.p + "static/media/topics_person2.3f4f8c8b.png"
    },
    75 : function(e, t, a) {
        e.exports = a.p + "static/media/topics_combined.3a594d39.png"
    },
    80 : function(e, t, a) {
        e.exports = a(192)
    },
    85 : function(e, t, a) {}
},
[[80, 2, 1]]]);
//# sourceMappingURL=main.e0372e84.chunk.js.map
