def recommend_next_module(indicators):
    for indicator in indicators:
        if indicator["name"] == "oral_expression" and indicator["value"] < 60:
            return "oral-professionnel-niveau-2"
    return "consolidation-generale"
