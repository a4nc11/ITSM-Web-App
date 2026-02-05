# ITSM Web Application – Test Cases

## TC-01: Application Load
**Description:** Verify application loads successfully  
**Steps:**
1. Open browser
2. Navigate to http://localhost:3000  
**Expected Result:** Application homepage is displayed

---

## TC-02: UI Elements Visibility
**Description:** Verify all UI elements are visible  
**Steps:**
1. Load homepage  
**Expected Result:** Header, form fields, and submit button are visible

---

## TC-03: Ticket Form Submission
**Description:** Verify user can submit a ticket  
**Steps:**
1. Enter name
2. Enter email
3. Enter issue description
4. Click Submit  
**Expected Result:** Form submits without error

---

## TC-04: Empty Form Validation
**Description:** Verify form does not submit empty data  
**Steps:**
1. Leave fields empty
2. Click Submit  
**Expected Result:** User is prompted to fill required fields

---

## TC-05: Cross-Browser Test
**Description:** Verify app works across browsers  
**Steps:**
1. Open app in Chrome
2. Open app in Edge  
**Expected Result:** UI behaves consistently
