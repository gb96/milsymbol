import { ms } from "../../ms.js";
import tacticalpoints from "../../iconparts/tactical-points.js";
ms.addIconParts(tacticalpoints);
import labels from "../labels/tactical-points-2525.js";
ms.addLabelOverrides(labels, "letter");

// SIDC parts for tactical points
export default function tacticalPoints(sidc, bbox, icn, std2525) {
  // Tactical Point Symbols =========================================================================
  sidc["G-T-D-----"] = icn["TP.DESTROY"]; //TACGRP.TSK.DSTY
  bbox["G-T-D-----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-T-I-----"] = icn["TP.INTERDICT"]; //TACGRP.TSK.ITDT
  bbox["G-T-I-----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-T-N-----"] = icn["TP.NEUTRALIZE"]; //TACGRP.TSK.NEUT
  bbox["G-T-N-----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-G-GPUUD-"] = icn["TP.DATUM"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.DTM
  bbox["G-G-GPUUD-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUUB-"] = icn["TP.BRIEF CONTACT"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.BCON
  bbox["G-G-GPUUB-"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-G-GPUUL-"] = icn["TP.LOST CONTACT"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.LCON
  bbox["G-G-GPUUL-"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-G-GPUUS-"] = icn["TP.SINKER"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.SNK
  bbox["G-G-GPUUS-"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-G-GPUY--"] = icn["TP.SONOBUOY"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY
  bbox["G-G-GPUY--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYP-"] = icn["TP.SONOBUOY PATTERN CENTER"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR
  bbox["G-G-GPUYP-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYD-"] = icn["TP.SONOBUOY DIFAR"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR
  bbox["G-G-GPUYD-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYL-"] = icn["TP.SONOBUOY LOFAR"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR
  bbox["G-G-GPUYL-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYC-"] = icn["TP.SONOBUOY CASS"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS
  bbox["G-G-GPUYC-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYS-"] = icn["TP.SONOBUOY DICASS"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS
  bbox["G-G-GPUYS-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYB-"] = icn["TP.SONOBUOY BT"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.BT
  bbox["G-G-GPUYB-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYA-"] = icn["TP.SONOBUOY ANM"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM
  bbox["G-G-GPUYA-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYV-"] = icn["TP.SONOBUOY VLAD"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD
  bbox["G-G-GPUYV-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYT-"] = icn["TP.SONOBUOY ATAC"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC
  bbox["G-G-GPUYT-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYR-"] = icn["TP.SONOBUOY RO"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.RO
  bbox["G-G-GPUYR-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYK-"] = icn["TP.SONOBUOY KINGPIN"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP
  bbox["G-G-GPUYK-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYX-"] = icn["TP.SONOBUOY EXPIRED"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP
  bbox["G-G-GPUYX-"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
  sidc["G-G-GPUS--"] = icn["TP.SEARCH"]; //TACGRP.C2GM.GNL.PNT.USW.SRH
  bbox["G-G-GPUS--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUSA-"] = icn["TP.SEARCH AREA"]; //TACGRP.C2GM.GNL.PNT.USW.SRH.ARA
  bbox["G-G-GPUSA-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUSD-"] = icn["TP.DIP POSITION"]; //TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN
  bbox["G-G-GPUSD-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUSC-"] = icn["TP.SEARCH CENTER"]; //TACGRP.C2GM.GNL.PNT.USW.SRH.CTR
  bbox["G-G-GPUSC-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPR---"] = icn["TP.REFERENCE POINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT
  bbox["G-G-GPR---"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRN--"] = icn["TP.NAVIGATIONAL REFERENCE"]; //TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF
  bbox["G-G-GPRN--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRS--"] = icn["TP.SPECIAL POINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT
  bbox["G-G-GPRS--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRD--"] = icn["TP.DLRP"]; //TACGRP.C2GM.GNL.PNT.REFPNT.DLRP
  bbox["G-G-GPRD--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRP--"] = icn["TP.POINT OF INTENDED MOVEMENT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.PIM
  bbox["G-G-GPRP--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRM--"] = icn["TP.MARSHALL POINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.MRSH
  bbox["G-G-GPRM--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRW--"] = icn["TP.REFERENCE POINT WAYPOINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.WAP
  bbox["G-G-GPRW--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRC--"] = icn["TP.CORRIDOR TAB"]; //TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB
  bbox["G-G-GPRC--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRI--"] = icn["TP.POINT OF INTEREST"]; //TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR
  bbox["G-G-GPRI--"] = { x1: 50, x2: 150, y1: -25 };
  sidc["G-G-GPWA--"] = icn["TP.AIM POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.AIMPNT
  bbox["G-G-GPWA--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPWD--"] = icn["TP.DROP POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.DRPPNT
  bbox["G-G-GPWD--"] = { x1: 50, x2: 150, y1: 50, y2: 120 };
  sidc["G-G-GPWE--"] = icn["TP.ENTRY POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.ENTPNT
  bbox["G-G-GPWE--"] = { x1: 50, x2: 150, y1: 50 };
  sidc["G-G-GPWG--"] = icn["TP.GROUND ZERO"]; //TACGRP.C2GM.GNL.PNT.WPN.GRDZRO
  bbox["G-G-GPWG--"] = { x1: 50, x2: 150, y1: 30 };
  sidc["G-G-GPWM--"] = icn["TP.MSL DETECT POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.MSLPNT
  bbox["G-G-GPWM--"] = { x1: 50, x2: 150, y1: 30 };
  sidc["G-G-GPWI--"] = icn["TP.IMPACT POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.IMTPNT
  bbox["G-G-GPWI--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPWP--"] = icn["TP.PREDICTED IMPACT POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.PIPNT
  bbox["G-G-GPWP--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPF---"] = icn["TP.FORMATION"]; //TACGRP.C2GM.GNL.PNT.FRMN
  bbox["G-G-GPF---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPH---"] = icn["TP.HARBOR"]; //TACGRP.C2GM.GNL.PNT.HBR
  bbox["G-G-GPH---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHQ--"] = icn["TP.HARBOR POINT Q"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTQ
  bbox["G-G-GPHQ--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHA--"] = icn["TP.HARBOR POINT A"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTA
  bbox["G-G-GPHA--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHY--"] = icn["TP.HARBOR POINT Y"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTY
  bbox["G-G-GPHY--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHX--"] = icn["TP.HARBOR POINT X"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTX
  bbox["G-G-GPHX--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPO---"] = icn["TP.ROUTE"]; //TACGRP.C2GM.GNL.PNT.RTE
  bbox["G-G-GPO---"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPOZ--"] = icn["TP.ROUTE RENDEZVOUS"]; //TACGRP.C2GM.GNL.PNT.RTE.RDV
  bbox["G-G-GPOZ--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOD--"] = icn["TP.ROUTE DIVERSIONS"]; //TACGRP.C2GM.GNL.PNT.RTE.DVSN
  bbox["G-G-GPOD--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOW--"] = icn["TP.ROUTE WAYPOINT"]; //TACGRP.C2GM.GNL.PNT.RTE.WAP
  bbox["G-G-GPOW--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOP--"] = icn["TP.ROUTE PIM"]; //TACGRP.C2GM.GNL.PNT.RTE.PIM
  bbox["G-G-GPOP--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOR--"] = icn["TP.ROUTE POINT R"]; //TACGRP.C2GM.GNL.PNT.RTE.PNTR
  bbox["G-G-GPOR--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPA---"] = icn["TP.AIR CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.ACTL
  bbox["G-G-GPA---"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAP--"] = icn["TP.COMBAT AIR PATROL (CAP)"]; //TACGRP.C2GM.GNL.PNT.ACTL.CAP
  bbox["G-G-GPAP--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAW--"] = icn["TP.AIRBORNE EARLY WARNING (AEW)"]; //TACGRP.C2GM.GNL.PNT.ACTL.ABNEW
  bbox["G-G-GPAW--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAK--"] = icn["TP.TANKING"]; //TACGRP.C2GM.GNL.PNT.ACTL.TAK
  bbox["G-G-GPAK--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAA--"] = icn["TP.FIXED WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWF
  bbox["G-G-GPAA--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAH--"] = icn["TP.ROTARY WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWR
  bbox["G-G-GPAH--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAB--"] = icn["TP.SUCAP - FIXED WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.SUWF
  bbox["G-G-GPAB--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAC--"] = icn["TP.SUCAP - ROTARY WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.SUWR
  bbox["G-G-GPAC--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAD--"] = icn["TP.MIW - FIXED WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.MIWF
  bbox["G-G-GPAD--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAE--"] = icn["TP.MIW - ROTARY WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.MIWR
  bbox["G-G-GPAE--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAS--"] = icn["TP.STRIKE IP"]; //TACGRP.C2GM.GNL.PNT.ACTL.SKEIP
  bbox["G-G-GPAS--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAT--"] = icn["TP.TACAN"]; //TACGRP.C2GM.GNL.PNT.ACTL.TCN
  bbox["G-G-GPAT--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAO--"] = icn["TP.TOMCAT"]; //TACGRP.C2GM.GNL.PNT.ACTL.TMC
  bbox["G-G-GPAO--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAR--"] = icn["TP.RESCUE"]; //TACGRP.C2GM.GNL.PNT.ACTL.RSC
  bbox["G-G-GPAR--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAL--"] = icn["TP.REPLENISH"]; //TACGRP.C2GM.GNL.PNT.ACTL.RPH
  bbox["G-G-GPAL--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAF--"] = icn["TP.UNMANNED AERIAL SYSTEM"]; //TACGRP.C2GM.GNL.PNT.ACTL.UA
  bbox["G-G-GPAF--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAG--"] = icn["TP.VTUA"]; //TACGRP.C2GM.GNL.PNT.ACTL.VTUA
  bbox["G-G-GPAG--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAI--"] = icn["TP.ORBIT"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORB
  bbox["G-G-GPAI--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAJ--"] = icn["TP.ORBIT - FIGURE EIGHT"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORBF8
  bbox["G-G-GPAJ--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAM--"] = icn["TP.ORBIT - RACE TRACK"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRT
  bbox["G-G-GPAM--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAN--"] = icn["TP.ORBIT - RANDOM, CLOSED"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRD
  bbox["G-G-GPAN--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPP---"] = icn["TP.ACTION POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT
  bbox["G-G-GPP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPK--"] = icn["TP.ACTION CHECK POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.CHKPNT
  bbox["G-G-GPPK--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPC--"] = icn["TP.CONTACT POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
  bbox["G-G-GPPC--"] = { x1: 55, x2: 145, y1: -10 };
  sidc["G-G-GPPO--"] = icn["TP.COORDINATION POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT
  bbox["G-G-GPPO--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPPD--"] = icn["TP.DECISION POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT
  bbox["G-G-GPPD--"] = { x1: 30, x2: 170, y1: 25, y2: 160 };
  sidc["G-G-GPPL--"] = icn["TP.ACTION LINKUP POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.LNKUPT
  bbox["G-G-GPPL--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPP--"] = icn["TP.ACTION PASSAGE POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.PSSPNT
  bbox["G-G-GPPP--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPR--"] = icn["TP.ACTION RALLY POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.RAYPNT
  bbox["G-G-GPPR--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPE--"] = icn["TP.ACTION RELEASE POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.RELPNT
  bbox["G-G-GPPE--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPS--"] = icn["TP.ACTION START POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.STRPNT
  bbox["G-G-GPPS--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPA--"] = icn["TP.ACTION AMNESTY POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.AMNPNT
  bbox["G-G-GPPA--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPW--"] = icn["TP.WAYPOINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.WAP
  bbox["G-G-GPPW--"] = { x1: 60, x2: 140, y1: 60, y2: 140 };
  sidc["G-G-GPC---"] = icn["TP.SEA SURFACE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL
  bbox["G-G-GPC---"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCU--"] = icn["TP.(USV) CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV
  bbox["G-G-GPCU--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUR-"] = icn["TP.(RMV) USV CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.RMV
  bbox["G-G-GPCUR-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUA-"] = icn["TP.USV - ASW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.ASW
  bbox["G-G-GPCUA-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUS-"] = icn["TP.USV - SUW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.SUW
  bbox["G-G-GPCUS-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUM-"] = icn["TP.USV - MIW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.MIW
  bbox["G-G-GPCUM-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCA--"] = icn["TP.ASW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.ASW
  bbox["G-G-GPCA--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCS--"] = icn["TP.SUW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.SUW
  bbox["G-G-GPCS--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCM--"] = icn["TP.MIW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.MIW
  bbox["G-G-GPCM--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCP--"] = icn["TP.PICKET CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.PKT
  bbox["G-G-GPCP--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCR--"] = icn["TP.RENDEZVOUS CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.SCTL.RDV
  bbox["G-G-GPCR--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCC--"] = icn["TP.RESCUE CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.SCTL.RSC
  bbox["G-G-GPCC--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCE--"] = icn["TP.REPLENISHMENT CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.SCTL.REP
  bbox["G-G-GPCE--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCN--"] = icn["TP.NONCOMBATANT CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.NCBTT
  bbox["G-G-GPCN--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPB---"] = icn["TP.SUB SURFACE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL
  bbox["G-G-GPB---"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBU--"] = icn["TP.(UUV) CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV
  bbox["G-G-GPBU--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBUA-"] = icn["TP.UUV - ASW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.ASW
  bbox["G-G-GPBUA-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBUS-"] = icn["TP.UUV - SUW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.SUW
  bbox["G-G-GPBUS-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBUM-"] = icn["TP.UUV - MIW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.MIW
  bbox["G-G-GPBUM-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBS--"] = icn["TP.SUBMARINE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN
  bbox["G-G-GPBS--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBSA-"] = icn["TP.ASW SUBMARINE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN.ASW
  bbox["G-G-GPBSA-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-APP---"] = icn["TP.AIR CONTROL POINT (ACP)"]; //TACGRP.C2GM.AVN.PNT.ACP
  bbox["G-G-APP---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-APC---"] = icn["TP.COMMUNICATIONS CHECKPOINT"]; //TACGRP.C2GM.AVN.PNT.COMMCP
  bbox["G-G-APC---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-APU---"] = icn["TP.PULL-UP POINT"]; //TACGRP.C2GM.AVN.PNT.PUP
  bbox["G-G-APU---"] = { x1: 50, x2: 240, y1: 50, y2: 150 };
  sidc["G-G-APD---"] = icn["TP.DOWNED AIRCREW PICKUP POINT"]; //TACGRP.C2GM.AVN.PNT.DAPP
  bbox["G-G-APD---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-PN----"] = icn["TP.DUMMY MINEFIELD"]; //TACGRP.C2GM.DCPN.DMYMS
  bbox["G-G-PN----"] = { x1: 40, x2: 160, y1: -10, y2: 140 };
  sidc["G-G-DPT---"] = icn["TP.TARGET REFERENCE"]; //TACGRP.C2GM.DEF.PNT.TGTREF
  sidc["G-G-DPO---"] = icn["TP.OBSERVATION POST/OUTPOST"]; //TACGRP.C2GM.DEF.PNT.OBSPST
  bbox["G-G-DPO---"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOC--"] = icn["TP.COMBAT OUTPOST"]; //TACGRP.C2GM.DEF.PNT.OBSPST.CBTPST
  bbox["G-G-DPOC--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOR--"] = icn["TP.OBSERVATION POST/RECONNAISSANCE"]; //TACGRP.C2GM.DEF.PNT.OBSPST.RECON
  bbox["G-G-DPOR--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOF--"] = icn["TP.FORWARD OBSERVER POSITION"]; //TACGRP.C2GM.DEF.PNT.OBSPST.FWDOP
  bbox["G-G-DPOF--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOS--"] = icn["TP.SENSOR OUTPOST"]; //TACGRP.C2GM.DEF.PNT.OBSPST.SOP
  bbox["G-G-DPOS--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPON--"] = icn["TP.CBRN OBSERVATION POST"]; //TACGRP.C2GM.DEF.PNT.OBSPST.CBRNOP
  bbox["G-G-DPON--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-OPP---"] = icn["TP.POINT OF DEPARTURE"]; //TACGRP.C2GM.OFF.PNT.PNTD
  bbox["G-G-OPP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-OAOF--"] = icn["TP.FIXED AND PREFABRICATED"]; //TACGRP.MOBSU.OBST.ATO.TDTSM.FIXPFD
  bbox["G-M-OAOF--"] = { x1: 60, x2: 140, y1: 30 };
  sidc["G-M-OAOM--"] = icn["TP.TETRAHEDRONS"]; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVB
  bbox["G-M-OAOM--"] = { x1: 60, x2: 140, y1: 30 };
  sidc["G-M-OAOP--"] = icn["TP.TETRAHEDRONS MOVABLE"]; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVBPFD
  bbox["G-M-OAOP--"] = { x1: 60, x2: 140, y1: 30 };
  sidc["G-M-OB----"] = icn["TP.BOOBY TRAP"]; //TACGRP.MOBSU.OBST.BBY
  sidc["G-M-OMU---"] = icn["TP.UNSPECIFIED MINE"]; //TACGRP.MOBSU.OBST.MNE.USPMNE
  sidc["G-M-OMT---"] = icn["TP.ANTITANK MINE (AT)"]; //TACGRP.MOBSU.OBST.MNE.ATMNE
  sidc["G-M-OMD---"] = icn["TP.(AT) ANTIHANDLING DEVICE"]; //TACGRP.MOBSU.OBST.MNE.ATMAHD
  bbox["G-M-OMD---"] = { x1: 60, x2: 140, y1: 40, y2: 195 };
  sidc["G-M-OME---"] = icn["TP.(AT) DIRECTIONAL"]; //TACGRP.MOBSU.OBST.MNE.ATMDIR
  bbox["G-M-OME---"] = { x1: 60, x2: 140, y1: 10, y2: 140 };
  sidc["G-M-OMP---"] = icn["TP.ANTIPERSONNEL (AP) MINES"]; //TACGRP.MOBSU.OBST.MNE.APMNE
  sidc["G-M-OMW---"] = icn["TP.WIDE AREA MINES"]; //TACGRP.MOBSU.OBST.MNE.WAMNE
  sidc["G-M-OFS---"] = icn["TP.MINEFIELDS STATIC"]; //TACGRP.MOBSU.OBST.MNEFLD.STC
  bbox["G-M-OFS---"] = { x1: 40, x2: 160, y1: 60, y2: 140 };
  sidc["G-M-OHTL--"] = icn["TP.TOWER LOW"]; //TACGRP.MOBSU.OBST.AVN.TWR.LOW
  bbox["G-M-OHTL--"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
  sidc["G-M-OHTH--"] = icn["TP.TOWER HIGH"]; //TACGRP.MOBSU.OBST.AVN.TWR.HIGH
  bbox["G-M-OHTH--"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
  sidc["G-M-BCP---"] = icn["TP.ENGINEER REGULATING POINT"]; //TACGRP.MOBSU.OBSTBP.CSGSTE.ERP
  bbox["G-M-BCP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-SE----"] = icn["TP.EARTHWORK/FORTIFICATION"]; //TACGRP.MOBSU.SU.ESTOF
  sidc["G-M-SF----"] = icn["TP.FORT"]; //TACGRP.MOBSU.SU.FRT
  sidc["G-M-SS----"] = icn["TP.SURFACE SHELTER"]; //TACGRP.MOBSU.SU.SUFSHL
  sidc["G-M-SU----"] = icn["TP.UNDERGROUND SHELTER"]; //TACGRP.MOBSU.SU.UGDSHL
  sidc["G-M-NZ----"] = icn["TP.NUCLEAR DETONATIONS GROUND ZERO"]; //TACGRP.MOBSU.CBRN.NDGZ
  bbox["G-M-NZ----"] = { x1: 60, x2: 140, y1: -20 };
  sidc["G-M-NF----"] = icn["TP.NUCLEAR FALLOUT PRODUCING"]; //TACGRP.MOBSU.CBRN.FAOTP
  bbox["G-M-NF----"] = { x1: 50, x2: 150, y1: -20 };
  sidc["G-M-NEB---"] = icn["TP.RELEASE EVENTS BIOLOGICAL"]; //TACGRP.MOBSU.CBRN.REEVNT.BIO
  bbox["G-M-NEB---"] = { x1: -10, x2: 140, y1: -20 };
  sidc["G-M-NEC---"] = icn["TP.RELEASE EVENTS CHEMICAL"]; //TACGRP.MOBSU.CBRN.REEVNT.CML
  bbox["G-M-NEC---"] = { x1: -20, x2: 140, y1: -20 };
  sidc["G-M-NDP---"] = icn["TP.DECON SITE/POINT"]; //TACGRP.MOBSU.CBRN.DECONP.USP
  bbox["G-M-NDP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDA---"] = icn["TP.ALTERNATE DECON SITE/POINT"]; //TACGRP.MOBSU.CBRN.DECONP.ALTUSP
  bbox["G-M-NDA---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDT---"] = icn["TP.DECON SITE/POINT (TROOPS)"]; //TACGRP.MOBSU.CBRN.DECONP.TRP
  bbox["G-M-NDT---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDE---"] = icn["TP.DECON SITE/POINT (EQUIPMENT)"]; //TACGRP.MOBSU.CBRN.DECONP.EQT
  bbox["G-M-NDE---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDB---"] = icn["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"]; //TACGRP.MOBSU.CBRN.DECONP.EQTTRP
  bbox["G-M-NDB---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDO---"] = icn["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"]; //TACGRP.MOBSU.CBRN.DECONP.OPDECN
  bbox["G-M-NDO---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDD---"] = icn["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"]; //TACGRP.MOBSU.CBRN.DECONP.TRGH
  bbox["G-M-NDD---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PTS---"] = icn["TP.POINT/SINGLE TARGET"]; //TACGRP.FSUPP.PNT.TGT.PTGT
  sidc["G-F-PTN---"] = icn["TP.NUCLEAR TARGET"]; //TACGRP.FSUPP.PNT.TGT.NUCTGT
  sidc["G-F-PCF---"] = icn["TP.FIRE SUPPORT STATION"]; //TACGRP.FSUPP.PNT.C2PNT.FSS
  sidc["G-F-PCS---"] = icn["TP.SURVEY CONTROL POINT"]; //TACGRP.FSUPP.PNT.C2PNT.SCP
  bbox["G-F-PCS---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCB---"] = icn["TP.FIRING POINT"]; //TACGRP.FSUPP.PNT.C2PNT.FP
  bbox["G-F-PCB---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCR---"] = icn["TP.RELOAD POINT"]; //TACGRP.FSUPP.PNT.C2PNT.RP
  bbox["G-F-PCR---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCH---"] = icn["TP.HIDE POINT"]; //TACGRP.FSUPP.PNT.C2PNT.HP
  bbox["G-F-PCH---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCL---"] = icn["TP.LAUNCH POINT"]; //TACGRP.FSUPP.PNT.C2PNT.LP
  bbox["G-F-PCL---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PX----"] = icn["TP.AMBULANCE EXCHANGE POINT"]; //TACGRP.CSS.PNT.AEP
  bbox["G-S-PX----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PC----"] = icn["TP.CANNIBALIZATION POINT"]; //TACGRP.CSS.PNT.CBNP
  bbox["G-S-PC----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PY----"] = icn["TP.CASUALTY COLLECTION POINT"]; //TACGRP.CSS.PNT.CCP
  bbox["G-S-PY----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PT----"] = icn["TP.CIVILIAN COLLECTION POINT"]; //TACGRP.CSS.PNT.CVP
  bbox["G-S-PT----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PD----"] = icn["TP.DETAINEE COLLECTION POINT"]; //TACGRP.CSS.PNT.DCP
  bbox["G-S-PD----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PE----"] = icn["TP.EPW COLLECTION POINT"]; //TACGRP.CSS.PNT.EPWCP
  bbox["G-S-PE----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PL----"] = icn["TP.LOGISTICS RELEASE POINT"]; //TACGRP.CSS.PNT.LRP
  bbox["G-S-PL----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PM----"] = icn["TP.MAINTENANCE COLLECTION POINT"]; //TACGRP.CSS.PNT.MCP
  bbox["G-S-PM----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PR----"] = icn["TP.REARM, REFUEL AND RESUPPLY POINT"]; //TACGRP.CSS.PNT.RRRP
  bbox["G-S-PR----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PU----"] = icn["TP.REFUEL ON THE MOVE POINT"]; //TACGRP.CSS.PNT.ROM
  bbox["G-S-PU----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PO----"] = icn["TP.TRAFFIC CONTROL POST"]; //TACGRP.CSS.PNT.TCP
  bbox["G-S-PO----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PI----"] = icn["TP.TRAILER TRANSFER POINT"]; //TACGRP.CSS.PNT.TTP
  bbox["G-S-PI----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PN----"] = icn["TP.UNIT MAINTENANCE COLLECTION POINT"]; //TACGRP.CSS.PNT.UMC
  bbox["G-S-PN----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSZ---"] = icn["TP.SUPPLY POINT"]; //TACGRP.CSS.PNT.SPT.GNL
  bbox["G-S-PSZ---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSA---"] = icn["TP.SP CLASS I"]; //TACGRP.CSS.PNT.SPT.CLS1
  bbox["G-S-PSA---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSB---"] = icn["TP.SP CLASS II"]; //TACGRP.CSS.PNT.SPT.CLS2
  bbox["G-S-PSB---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSC---"] = icn["TP.SP CLASS III"]; //TACGRP.CSS.PNT.SPT.CLS3
  bbox["G-S-PSC---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSD---"] = icn["TP.SP CLASS IV"]; //TACGRP.CSS.PNT.SPT.CLS4
  bbox["G-S-PSD---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSE---"] = icn["TP.SP CLASS V"]; //TACGRP.CSS.PNT.SPT.CLS5
  bbox["G-S-PSE---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSF---"] = icn["TP.SP CLASS VI"]; //TACGRP.CSS.PNT.SPT.CLS6
  bbox["G-S-PSF---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSG---"] = icn["TP.SP CLASS VII"]; //TACGRP.CSS.PNT.SPT.CLS7
  bbox["G-S-PSG---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSH---"] = icn["TP.SP CLASS VIII"]; //TACGRP.CSS.PNT.SPT.CLS8
  bbox["G-S-PSH---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSI---"] = icn["TP.SP CLASS IX"]; //TACGRP.CSS.PNT.SPT.CLS9
  bbox["G-S-PSI---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSJ---"] = icn["TP.SP CLASS X"]; //TACGRP.CSS.PNT.SPT.CLS10
  bbox["G-S-PSJ---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PAS---"] = icn["TP.AMMUNITION SUPPLY POINT (ASP)"]; //TACGRP.CSS.PNT.AP.ASP
  bbox["G-S-PAS---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PAT---"] = icn["TP.AMMUNITION TRANSFER POINT (ATP)"]; //TACGRP.CSS.PNT.AP.ATP
  bbox["G-S-PAT---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-O-ED----"] = icn["TP.DITCHED AIRCRAFT"]; //TACGRP.OTH.ER.DTHAC
  sidc["G-O-EP----"] = icn["TP.PERSON IN WATER"]; //TACGRP.OTH.ER.PIW
  sidc["G-O-EV----"] = icn["TP.DISTRESSED VESSEL"]; //TACGRP.OTH.ER.DSTVES
  sidc["G-O-HM----"] = icn["TP.SEA MINELIKE"]; //TACGRP.OTH.HAZ.SML
  bbox["G-O-HM----"] = { x1: 40, x2: 160, y1: 40, y2: 150 };
  sidc["G-O-HI----"] = icn["TP.ICEBERG"]; //TACGRP.OTH.HAZ.IB
  bbox["G-O-HI----"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-O-HO----"] = icn["TP.OIL RIG/PLATFORM"]; //TACGRP.OTH.HAZ.OLRG
  bbox["G-O-HO----"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-O-SB----"] = icn["TP.BOTTOM RETURN"]; //TACGRP.OTH.SSUBSR.BTMRTN
  bbox["G-O-SB----"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
  sidc["G-O-SBM---"] = icn["TP.INSTALLATION/MANMADE"]; //TACGRP.OTH.SSUBSR.BTMRTN.INS
  bbox["G-O-SBM---"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
  sidc["G-O-SBN---"] = icn["TP.BOTTOM RETURN"]; //TACGRP.OTH.SSUBSR.BTMRTN.SBRSOO
  bbox["G-O-SBN---"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
  sidc["G-O-SBW---"] = icn["TP.WRECK, NON DANGEROUS"]; //TACGRP.OTH.SSUBSR.BTMRTN.WRKND
  bbox["G-O-SBW---"] = { x1: 40, x2: 160, y1: 70, y2: 130 };
  sidc["G-O-SBX---"] = icn["TP.WRECK, DANGEROUS"]; //TACGRP.OTH.SSUBSR.BTMRTN.WRKD
  bbox["G-O-SBX---"] = { x1: 40, x2: 160, y1: 70, y2: 130 };
  sidc["G-O-SM----"] = icn["TP.MARINE LIFE"]; //TACGRP.OTH.SSUBSR.MARLFE
  bbox["G-O-SM----"] = { x1: 100, x2: 220, y1: 70, y2: 130 };
  sidc["G-O-SS----"] = icn["TP.SEA ANOMALY"]; //TACGRP.OTH.SSUBSR.SA
  bbox["G-O-SS----"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
  sidc["G-O-FA----"] = icn["TP.FIX ACOUSTIC"]; //TACGRP.OTH.FIX.ACU
  sidc["G-O-FE----"] = icn["TP.FIX ELECTRO-MAGNETIC"]; //TACGRP.OTH.FIX.EM
  sidc["G-O-FO----"] = icn["TP.FIX ELECTRO-OPTICAL"]; //TACGRP.OTH.FIX.EOP
}