export const news = [
  {
    slug: 'seasonal-flu-prevention-tips',
    title: '5 Simple Ways to Protect Your Family This Flu Season',
    category: 'Health Tips',
    date: '2026-01-15',
    excerpt: 'Simple, practical steps to reduce your family\'s risk during peak flu season.',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&h=800&fit=crop&auto=format&q=80',
    content: `Flu season brings a rise in respiratory illness across all age groups, but a few consistent habits can meaningfully lower your family's risk.\n\nWashing hands regularly, especially after being in public spaces, remains one of the most effective ways to reduce the spread of seasonal viruses. Keeping frequently touched surfaces clean at home is a helpful complement to this habit.\n\nStaying up to date on recommended seasonal vaccinations is another important step, particularly for young children, older adults, and anyone with an underlying health condition.\n\nGetting adequate rest and maintaining a balanced diet supports your immune system's ability to respond to seasonal illness. If symptoms do appear, early rest and hydration often make a meaningful difference in recovery time.\n\nIf you or a family member develop a high fever, difficulty breathing, or symptoms that do not improve after a few days, our General Medicine team is available for consultation.`,
  },
  {
    slug: 'understanding-heart-health-screenings',
    title: 'Understanding Heart Health Screenings: What to Expect',
    category: 'Cardiology',
    date: '2025-12-02',
    excerpt: 'A guide to routine cardiac screenings and why early detection matters.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&h=800&fit=crop&auto=format&q=80',
    content: `Routine heart health screening plays an important role in identifying risk factors before they become serious concerns.\n\nA typical screening may include blood pressure measurement, cholesterol testing, and a discussion of family history and lifestyle factors. For patients with specific risk factors, our Cardiology team may recommend additional testing such as an ECG or echocardiogram.\n\nEarly detection allows for lifestyle adjustments and, where needed, treatment plans that can meaningfully reduce long-term cardiovascular risk.\n\nAdults over 40, or those with a family history of heart disease, are generally encouraged to discuss a screening schedule with their doctor.`,
  },
  {
    slug: 'new-diagnostic-imaging-technology',
    title: 'SYNEXUS Expands Diagnostic Imaging Capabilities',
    category: 'Hospital News',
    date: '2025-11-10',
    excerpt: 'Our imaging center now offers expanded services for faster, more detailed diagnostics.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop&auto=format&q=80',
    content: `We're pleased to share that our Diagnostic Imaging department has expanded its service offerings, allowing for faster scheduling and more detailed imaging across several modalities.\n\nThis expansion supports faster turnaround for both routine and urgent diagnostic needs, helping our physicians make timely, well-informed treatment decisions.\n\nPatients can now expect shorter wait times for standard imaging appointments, along with continued support from our experienced radiology team.`,
  },
  {
    slug: 'caring-for-your-childs-first-fever',
    title: "Caring for Your Child's First Fever: A Parent's Guide",
    category: 'Pediatrics',
    date: '2025-10-22',
    excerpt: 'Practical, reassuring guidance for parents navigating a child\'s first fever.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&h=800&fit=crop&auto=format&q=80',
    content: `A child's first fever can understandably feel worrying for new parents, but in most cases it is simply a sign the body is responding to a common illness.\n\nKeeping your child comfortable, ensuring they stay hydrated, and monitoring their temperature are usually the most helpful steps. Lightweight clothing and a comfortable room temperature can also help.\n\nIt's a good idea to contact your pediatrician if a fever is very high, lasts more than a couple of days, or is accompanied by other concerning symptoms such as difficulty breathing or unusual drowsiness.\n\nOur Pediatrics team is always available to help parents navigate these early, uncertain moments with confidence.`,
  },
  {
    slug: 'joint-pain-when-to-see-a-specialist',
    title: 'Joint Pain: When Is It Time to See a Specialist?',
    category: 'Orthopedics',
    date: '2025-09-18',
    excerpt: 'How to tell the difference between everyday soreness and something worth investigating.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop&auto=format&q=80',
    content: `Occasional joint soreness is common, especially after physical activity, but persistent or worsening pain can be a sign of something that deserves a closer look.\n\nSigns worth paying attention to include swelling that doesn't improve, pain that limits daily movement, or discomfort that continues for more than a few weeks.\n\nAn orthopedic evaluation can help identify the underlying cause, whether it's related to overuse, an old injury, or an early degenerative condition, and guide an appropriate treatment plan.\n\nEarly evaluation often leads to simpler, more effective treatment options than waiting until symptoms become severe.`,
  },
  {
    slug: 'womens-health-routine-checkups',
    title: 'Why Routine Women\'s Health Checkups Matter at Every Age',
    category: "Women's Health",
    date: '2025-08-05',
    excerpt: 'Routine gynecological care remains one of the most effective tools for long-term health.',
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=1200&h=800&fit=crop&auto=format&q=80',
    content: `Routine women's health checkups play a key role in early detection and long-term wellbeing, regardless of age or life stage.\n\nRegular visits allow your care team to track changes over time, discuss any concerns openly, and catch potential issues early, when they are often easiest to address.\n\nOur Obstetrics & Gynecology team encourages patients to maintain a consistent checkup schedule as part of routine preventive care, alongside any specific concerns that come up between visits.`,
  },
]

export function getNewsBySlug(slug) {
  return news.find((n) => n.slug === slug)
}