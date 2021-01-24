//~~tv:4049.20180904
//~~tc: Update check for existing gtag.js
//~~tc: Resolve issues bundling gtag.js tags

//tealium universal tag - utag.sender.4049 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.41
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName == "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img") { utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    u.ev = {"view" : 1, "link": 1};

    u.hasgtagjs = function (){
      window.gtagRename = window.gtagRename || "##UTVARconfig_gtag_rename##" || "gtag";
      if (utag.ut.gtagScriptRequested) {
        return true;
      }
      var i, s = document.getElementsByTagName("script");
      for (i = 0; i < s.length; i++) {
        if (s[i].src && s[i].src.indexOf("gtag/js") >= 0) {
          return true;
        }
      }
      window.dataLayer = window.dataLayer || [];
      if ( typeof window[window.gtagRename] !== "function" ) {
        window[window.gtagRename] = function() { dataLayer.push(arguments); };
        window[window.gtagRename]("js", new Date());
      }
      return false;
    };

    u.scriptrequested = u.hasgtagjs();

    u.o = window[window.gtagRename];

    u.map_func = function (arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.map_func(arr,obj[i], item);
      } else {
        obj[i] = item;
      }
    };

    u.hasOwn = function (o, a) {
      return o != null && Object.prototype.hasOwnProperty.call(o, a);
    };

    u.isEmptyObject = function (o, a) {
      for (a in o) { if (u.hasOwn(o, a)) {return false;}} return true;
    };


    ##UTGEN##

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:##UTID##");
        utag.DB(b);

        var d, e, f, h, i, j, _event, p, key;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "base_url" : "https://www.googletagmanager.com/gtag/js",
          "advertiser_id" : "##UTVARconfig_advertiser_id##",
          "activity_group" : "##UTVARconfig_activity_group##",
          "activity" : "##UTVARconfig_activity##",
          "counting_method" : "##UTVARconfig_counting_method##",
          "custom_scripts" :  "##UTVARconfig_custom_scripts##",
          "session_id" : "",
          "product_quantity" : [],
          "dc_custom_params" : {},
          "event_name" : "",
          "event" : [],
          "custom" : {}
        };

        // Start tag-scoped extensions
        ##UTEXTEND##
        utag.DB("send:##UTID##:EXTENSIONS");
        utag.DB(b);
        // End tag-scoped extensions

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.map_func(e[f].split("."), u.data, b[d]);
            }
          } else {
            h = d.split(":");
            if (h.length === 2 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data.event = u.data.event.concat(u.map[d].split(","));
              }
            }
          }
        }
        utag.DB("send:##UTID##:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values
        u.data.order_id = u.data.order_id || b._corder || "";
        u.data.order_total = u.data.order_total || b._ctotal || "";
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }

        if(typeof(u.data.advertiser_id) === "string"){ u.data.advertiser_id = u.data.advertiser_id.split(","); }
        if(typeof(u.data.activity_group) === "string"){ u.data.activity_group = u.data.activity_group.split(","); }
        if(typeof(u.data.activity) === "string"){ u.data.activity = u.data.activity.split(","); }
        if(typeof(u.data.counting_method) === "string"){ u.data.counting_method = u.data.counting_method.split(","); }
        if(typeof(u.data.session_id) === "string"){ u.data.session_id = u.data.session_id.split(","); }

        // Report required config is missing, and stop tag from firing.
        if (!u.data.advertiser_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated");
          return;
        }

        u.data.base_url += "?id=" + (u.data.advertiser_id[0]);

        for (i = 0; i < u.data.advertiser_id.length; i++) {
          u.o("config", u.data.advertiser_id[i]);
        }

        if (u.data.order_id) {
            // p is the flag for a purchase event present in the event list
            for (i = 0; i < u.data.event.length; i++) {
              if (u.data.event[i] === "purchase") {
                p = true;
              }
            }
            if (!p) {
              u.data.event.push("purchase");
            }
          }


        var total_qty = 1;
        if (typeof (u.data.product_quantity) === "number") {
          total_qty = u.data.product_quantity;
        } else if (u.data.product_quantity.length === 1) {
          total_qty = u.data.product_quantity[0];
        } else if (u.data.product_quantity.length > 1) {
          for (i = 0; i < u.data.product_quantity.length; i++) {
            total_qty += parseInt(u.data.product_quantity[i], 10);
          }
        }
        u.data.items = [];
        if (b.product_id !== undefined && b.product_id !== "") {
                    for (var i = 0; i < b.product_id.length; i++) {
                        var temp_items = {};
                        temp_items.id = b.product_id[i];
						if (b.product_price !== undefined && b.product_price !== "") {
                            temp_items.price = b.product_price[i];
						}
                        if (b.product_quantity !== undefined && b.product_quantity !== "") {
                            temp_items.quantity = parseInt(b.product_quantity[i]);
                        }
                        u.data.items.push(temp_items);
                    }
                }

        for (i = 0; i < u.data.event.length; i++) {
          _event = u.data.event[i];

          for (j = 0; j < u.data.advertiser_id.length; j++) {
            var eventIdData = {};

            if (u.data.custom_scripts === "true" || u.data.custom_scripts) {
              eventIdData.allow_custom_scripts = true;
            } else if (u.data.custom_scripts === "false" || !u.data.custom_scripts) {
              eventIdData.allow_custom_scripts = false;
            }

            if (u.data.session_id.length === 1 && u.data.session_id[0] !== "") {
              eventIdData.session_id = u.data.session_id[0];
            } else if (u.data.session_id[j] !== "") {
              eventIdData.session_id = u.data.session_id[j];
            }

            if (u.data.order_total) {
              eventIdData.value = u.data.order_total;
              eventIdData.transaction_id = u.data.order_id;
            }
            if (u.data.product_quantity) {
              eventIdData.quantity = total_qty;
            }

            for (key in u.data.custom) {
              eventIdData[key] = u.data.custom[key];
            }

            eventIdData.items = u.data.items;
            //eventIdData.country = u.data.country_code;
            //eventIdData.language = 'en';

            if ((/registryconfirmation/i.test(b.pagename_siteid) || /create registry/i.test(b.pagename_siteid)) && (u.data.counting_method[j] === "unique")) {
              u.data.dc_custom_params["ord"] = 1;
              u.data.dc_custom_params["num"] = 1;
            }
            else {
              if("num" in u.data.dc_custom_params) {delete u.data.dc_custom_params["num"];}
              if("ord" in u.data.dc_custom_params) {delete u.data.dc_custom_params["ord"];}
            }

            if (!u.isEmptyObject(u.data.dc_custom_params)) {
              eventIdData.dc_custom_params = {};
              for (key in u.data.dc_custom_params) {
                eventIdData.dc_custom_params[key] = u.data.dc_custom_params[key];
              }

            }

            if (b.pagename_siteid == 'pack & hold > confirmation thankyou modal|bbby' && eventIdData['u1'] === undefined && b.pnh_add_revenue) {
              eventIdData['u1'] = b.pnh_add_revenue;
            }

            eventIdData.send_to = u.data.advertiser_id[j] + "/" + u.data.activity_group[j]  + "/" + u.data.activity[j]  + "+" + u.data.counting_method[j];
            if (_event === "purchase") {
              u.o("event", "purchase", eventIdData);
            }
            if (_event === "conversion") {
              u.o("event", "conversion", eventIdData);
            }
          }
        }

        if (!u.hasgtagjs()) {
          u.scriptrequested = true;
          utag.ut.gtagScriptRequested = true;
          u.loader({
            "type" : "script",
            "src" : u.data.base_url,
            "cb" : null,
            "loc" : "script",
            "id" : "utag_##UTID##",
            "attrs" : {}
          });
        }

        utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("##UTID##", "##UTLOADERID##"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
