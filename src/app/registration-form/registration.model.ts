export interface ReportSection {
    sectionName: string;
    showTotalInFooter: boolean;
    sectionData: ReportSectionDetails[];
}

export interface ReportSectionDetails {
    name: string;
    amount: Number;
}

export interface ReportModel {
    part1Data: {
        headerName: string,
        section1Info: ReportSection,
        section2Info: ReportSection
    }
    part2Data: {
        headerName: string,
        section3Info: ReportSection,
        section4Info: ReportSection
    }
    part3Data: {
        headerName: string,
        section5Info: ReportSection,
        section6Info: ReportSection
    }
}

export interface ReportRecord {
    recordId: string,
    providerId: string,
    submissionYear: number,
    submissionQuarter: number,
    printedDate: string,
    reviewedDate: string,
    faxedDate: string,
    returnedDate: string,
    createdBy: string,
    createdDate: string,
    lastUpdatedBy: string,
    lastUpdatedDate: string,
    ageCategory: {
        recordId: string,
        ageUnder1: number,
        ageThrough4: number,
        ageThrough14: number,
        ageThrough54: number,
        ageThrough64: number,
        ageThrough74: number,
        ageThrough84: number,
        ageOver84: number,
        ageUnknown: number,
        record: string
    },
    cardiacRosc: {
        recordId: string,
        aedpriorRoscyes: number,
        aedpriorRoscno: number,
        aedlicensedRoscyes: number,
        aedlicensedRoscno: number,
        noAedroscyes: number,
        noAedroscno: number,
        roscyes: number,
        roscno: number,
        record: string
    },
    causeOfInjury: {
        recordId: string,
        aircraftRelatedCrash: number,
        animalBite: number,
        barotrauma: number,
        bicycle: number,
        burnScald: number,
        chemicalPoisoning: number,
        childAssaults: number,
        divingRelatedTrauma: number,
        drowning: number,
        drugPoisoning: number,
        electrocution: number,
        excessiveCold: number,
        excessiveHeat: number,
        fall: number,
        fightOrBrawl: number,
        fireAndFlames: number,
        firearm: number,
        inhalationIngestion: number,
        lightning: number,
        machinery: number,
        mechanicalSuffocation: number,
        motorcycle: number,
        motorVehicleNonTraffic: number,
        motorVehicleBycycle: number,
        motorVehicleFixedObject: number,
        motorVehicleMotorcycle: number,
        motorVehicleMotorVehicle: number,
        motorVehiclePedestrian: number,
        motorVehicleTrain: number,
        motorVehicleOther: number,
        overexertionStrain: number,
        radiationExposure: number,
        rape: number,
        smokeInhalation: number,
        stabbingAssault: number,
        struckByObjectNos: number,
        venomousBiteStings: number,
        waterTransport: number,
        otherNos: number,
        notApplicable: number,
        unknown: number,
        record: string
    },
    criticalTreatment: {
        recordId: string,
        aedonlyPrior: number,
        aedcprprior: number,
        aedonlyLicenced: number,
        aedcprlicensed: number,
        bagValveMask: number,
        bloodGlucoseTest: number,
        cardiacPacing: number,
        chestTube: number,
        cpronlyPrior: number,
        cpronlyLicensed: number,
        cricothyrotomy: number,
        defibrillation: number,
        intraosseousCatheter: number,
        intubation: number,
        militaryAstrouserBp: number,
        militaryAstrouserFracture: number,
        ecg3lead: number,
        ecg12leadPlus: number,
        needleThoracostomy: number,
        nasogastricTube: number,
        obstetricalCare: number,
        spinalImmobilization: number,
        volumeResuscitation: number,
        asprinChestPain: number,
        cardiacDrugsNos: number,
        medicationPain: number,
        paralyticDrugsIntubation: number,
        thrombolytics: number,
        cardiacAlert: number,
        strokeAlert: number,
        traumaAlert: number,
        record: string
    },
    incidentCounties: [
        {
            recordId: string,
            countyId: number,
            frequency: number,
            county: {
                countyId: number,
                countyState: string,
                countyRegion: string,
                countyName: string,
                incidentCounties: [
                    string
                ]
            },
            record: string
        }
    ],
    incidentPatientDisposition: {
        recordId: string,
        transportedGeneralHospital: number,
        transportedNursingHome: number,
        transportedMedicalOffice: number,
        transportedHome: number,
        transportedTraumaCenter: number,
        transportedOther: number,
        transferredCare: number,
        transportedPrivateVehicle: number,
        treatedReleased: number,
        treatedRefusedTransport: number,
        noTreatmentRequired: number,
        patientRefusedCare: number,
        deadAtScene: number,
        cancelled: number,
        notApplicable: number,
        unknown: number,
        noPatientFound: number,
        doNotResuscitateOrder: number,
        record: string
    },
    injurySiteType: {
        recordId: string,
        siteExternal: number,
        siteHead: number,
        siteFace: number,
        siteNeck: number,
        siteThorax: number,
        siteAbdomen: number,
        siteSpine: number,
        siteUpper: number,
        siteLower: number,
        siteUnspecified: number,
        typeAmputation: number,
        typeBlunt: number,
        typeBurn: number,
        typeCrush: number,
        typeDislocationFracture: number,
        typeGunshot: number,
        typeLaceration: number,
        typePain: number,
        typePuncture: number,
        typeSwellingBruising: number,
        record: string
    },
    profileInformation: {
        recordId: string,
        paramedic: number,
        emt: number,
        other: number,
        als: number,
        bls: number,
        rotor: number,
        fixed: number,
        record: string
    },
    provider: {
        providerId: string,
        providerName: string,
        providerType: string,
        firstName: string,
        lastName: string,
        middleName: string,
        address: string,
        city: string,
        state: string,
        zip: string,
        county: string,
        phone: string,
        fax: string,
        email: string,
        activePrehospital: true,
        activeTransition: true,
        activeEmstars: true,
        active: true,
        updatedBy: string,
        updatedDate: string,
        emstarsTransitionAggregates: [
            {
                reportingMonth: string,
                providerId: string,
                scene: number,
                interfacilityTransfer: number,
                standby: number,
                rendezvous: number,
                unknown: number,
                treatedTransported: number,
                treatedTransferredCare: number,
                treatedNotTransported: number,
                treatedReleased: number,
                treatedRefusedTransport: number,
                noTreatmentRequired: number,
                patientRefusedCare: number,
                deadAtScene: number,
                cancelled: number,
                noPatientFound: number,
                createdBy: string,
                createdDate: string,
                updatedBy: string,
                updatedDate: string,
                provider: string
            }
        ],
        records: [
            string
        ]
    },
    providerImpression: {
        recordId: string,
        abdominalPain: number,
        airwayObstruction: number,
        allergicReaction: number,
        alteredConsciousness: number,
        behavioralDisorder: number,
        burns: number,
        cardiacArrest: number,
        cardiacDisturbance: number,
        cardiovascularNos: number,
        chestPain: number,
        chfedema: number,
        diabeticSymptoms: number,
        digestiveSymptoms: number,
        digestiveSymptomsNos: number,
        electrocution: number,
        fluLikeSymptoms: number,
        generalIllnessNos: number,
        hemorrhageBleeding: number,
        hypertension: number,
        hyperthermia: number,
        hypothermia: number,
        hypovolemia: number,
        inhalationInjury: number,
        medicationReaction: number,
        painNos: number,
        poisoningIngestion: number,
        pregnancyDelivery: number,
        respiratoryArrest: number,
        respiratoryDistress: number,
        respiratoryNos: number,
        seizure: number,
        sexualAssault: number,
        smokeInhalation: number,
        stingsBites: number,
        stroke: number,
        syncope: number,
        traumaticInjuryNos: number,
        vaginalHemorrhage: number,
        otherNos: number,
        unknown: number,
        record: string
    },
    recordComments: [
        {
            commentDate: string,
            recordId: string,
            comment: string,
            record: string
        }
    ],
    serviceTypeRequested: ServiceTypeRequest,
    transportMode: {
        recordId: string,
        alsground: number,
        alsrotor: number,
        alswing: number,
        blsground: number,
        other: number,
        record: string
    }

}

export interface ServiceTypeRequest {
    
        recordId: string,
        scene: number,
        unscheduled: number,
        scheduled: number,
        standby: number,
        rendezvous: number,
        notApplicable: number,
        unknown: number,
        record: string
}


export interface CountryLookup {
    countyId: number,
    countyState: string,
    countyRegion: string,
    countyName: string
    incidentCounties: []
}



