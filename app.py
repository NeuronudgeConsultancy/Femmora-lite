import streamlit as st
from PIL import Image
from datetime import date

# ---------- Page setup ----------
st.set_page_config(page_title="FEMMORA Lite", page_icon="🌸", layout="wide")

# Top bar with logo + title
col_logo, col_title = st.columns([1, 4])
with col_logo:
    try:
        st.image("images/logo.png", use_container_width=True)
    except Exception:
        st.write(" ")  # no logo yet, skip
with col_title:
    st.markdown("## 🌸 FEMMORA Lite — AI Fertility & Hormone Companion")
    st.caption("Track cycles, analyze hormonal patterns, and share insights with your doctor.")

# Sidebar navigation
st.sidebar.header("Navigation")
page = st.sidebar.radio(
    "Go to",
    ["Dashboard", "Cycle & Symptoms", "Doctor Portal", "About"],
    label_visibility="collapsed"
)

# ---------- Dashboard ----------
if page == "Dashboard":
    st.subheader("Today at a glance")
    left, right = st.columns(2)
    with left:
        st.metric("Cycle Day", 14)
        st.metric("Predicted Fertile Window", "High")
    with right:
        st.metric("Energy", "7 / 10")
        st.metric("Mood", "Calm")
    st.divider()
    st.markdown("#### Quick Upload")
    uploaded = st.file_uploader("Upload a lab result (PDF/JPG/PNG)", type=["pdf", "jpg", "jpeg", "png"])
    if uploaded:
        st.success("File uploaded successfully.")
        if uploaded.type.startswith("image/"):
            st.image(Image.open(uploaded), caption="Uploaded image preview", use_container_width=True)

# ---------- Cycle & Symptoms ----------
elif page == "Cycle & Symptoms":
    st.subheader("Log cycle & symptoms")
    col1, col2 = st.columns(2)
    with col1:
        start = st.date_input("Cycle start date", value=date.today())
        flow = st.selectbox("Flow", ["Light", "Medium", "Heavy"])
        pain = st.slider("Cramps / pain", 0, 10, 3)
    with col2:
        mood = st.selectbox("Mood", ["Great", "Okay", "Tired", "Stressed"])
        sleep = st.slider("Sleep quality", 0, 10, 6)
        energy = st.slider("Energy", 0, 10, 6)
    if st.button("Save entry"):
        st.success("Saved! (MVP demo—data stored locally during this session.)")

    st.divider()
    st.markdown("#### Weekly hormone trend (demo)")
    st.line_chart({
        "Estrogen": [3.2, 3.5, 3.1, 3.7, 3.9, 3.6, 3.8],
        "Progesterone": [1.0, 1.1, 1.3, 1.4, 1.6, 1.5, 1.4],
    })

# ---------- Doctor Portal ----------
elif page == "Doctor Portal":
    st.subheader("Secure sharing (MVP demo)")
    st.info("This is a prototype. In production, add auth & HIPAA-compliant storage.")
    patient_name = st.text_input("Patient name")
    doctor_id = st.text_input("Doctor ID")
    notes = st.text_area("Doctor notes")
    attachments = st.file_uploader("Attach files", type=["pdf", "jpg", "png"], accept_multiple_files=True)
    if st.button("Share with doctor"):
        st.success(f"Shared with Doctor {doctor_id or '—'} for patient {patient_name or '—'} (demo only).")

# ---------- About ----------
else:
    st.subheader("About FEMMORA Lite")
    st.write(
        "FEMMORA Lite is an MVP prototype that helps women track cycles, log symptoms, "
        "visualize hormone patterns, and share insights with doctors."
    )
    st.markdown("- Cycle & symptoms logging\n- Simple analytics\n- Doctor-sharing demo flow")

st.caption("© FEMMORA Lite — prototype build")
